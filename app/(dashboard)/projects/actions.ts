'use server'
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY!})


export async function addProject(formData:{
    title: string,
    description: string,
    status: string,
    due_date: string,
    client_id: string
}){
    const supabase = await createClient()
    const {data: {user}} = await supabase.auth.getUser()
    if(!user) return {error : "Not authenticated"}
    const {error} = await supabase.from('projects').insert({
                title: formData.title,
                description: formData.description,
                status: formData.status,
                due_date: formData.due_date || null,
                client_id : formData.client_id || null,
                user_id: user.id
            })
    
        if(error){
                console.log(error) 
                return {error: error.message}
            }
        revalidatePath('/projects')
        return {success: true}
}

export async function deleteProject(id:string) {
    const supabase = await createClient()
    const {data: {user}} = await supabase.auth.getUser()
    if(!user) return {error: 'Not authenticated'}
    const {error} = await supabase.from('projects').delete().eq('id', id)
    if(error) return {error: error.message}
    revalidatePath('/projects')
    return {success: true}
}

export async function editProject(id: string, formData: { 
    client_id: string | null
    title: string
    description: string
    status: 'active' | 'paused' | 'done'
    due_date: string | null
}){
    const supabase = await createClient();
    const {data: {user}} = await supabase.auth.getUser()
    if(!user) return {error: 'Not authenticated'}
    const {error} = await supabase.from('projects').update({
        client_id : formData.client_id || null,
        title: formData.title,
        description : formData.description,
        status: formData.status,
        due_date : formData.due_date || null
    }).eq('id', id)
    if(error) return {error: error.message}
    revalidatePath('/projects')
    return {success: true}
}

export async function generateTasks(projectId: string, title: string, description: string) {
    const prompt = `Generate a list of actionable tasks for a project titled ${title} with the description: ${description}. 
    Return ONLY a valid JSON array. No explanation, no markdown, no text outside the array.
    Format: [{"title":"task_title", "status": "todo"}]`
    const response = await ai.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: prompt,
    })
    
    const text = response.text || '[]'
    const cleaned = text.replace(/```json|```/g, '').trim()
    const tasksArray = JSON.parse(cleaned)
    const supabase = await createClient()
    const {data: {user}} = await supabase.auth.getUser()
    if(!user) return 'Not authenticated'
    const generatedTasks = tasksArray.map((task: {title: string, status: string}) =>({
        title: task.title,
        status: task.status,
        project_id: projectId,
        user_id: user.id,
        ai_generated: true
    }))
    console.log(generatedTasks)
    const {error} = await supabase.from('tasks').insert(generatedTasks)
    if(error) return {error:error.message}
    revalidatePath(`/projects/${projectId}/tasks`)
    return {success: true}
}
    
   
    
    
    

