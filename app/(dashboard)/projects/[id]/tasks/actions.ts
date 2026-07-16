'use server'
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"


export async function addTask(projectId: string,formData :{
    title: string,
    status: string,
    due_date: string
}){
const supabase = await createClient();
const {data: {user}} = await supabase.auth.getUser()
if(!user) return {error: "Not authenticated"}
const {error} = await supabase.from('tasks').insert({
    title: formData.title,
    status: formData.status,
    due_date: formData.due_date || null,
    project_id: projectId,
    user_id: user.id,
    ai_generated: false
})
if(error) {
    return {error : error.message}
}
revalidatePath(`/projects/${projectId}tasks`)
return {success: true}
}

export async function updateTaskStatus(id: string, status: 'todo' | 'in_progress' | 'done'){
    const supabase = await createClient()
    const {data: {user}} = await supabase.auth.getUser()
    if(!user) return {error: 'Not authenticated'}
    const {error} = await supabase.from('tasks').update({status}).eq('id', id)
    if(error) return {error: error.message}
    revalidatePath(`/projects/${id}/tasks`)
}

export async function deleteTask(id: string, projectId: string){
    const supabase = await createClient()
    const {data: {user}} = await supabase.auth.getUser()
    if(!user) return {error: 'Not authenticated'}
    const {error} = await supabase.from('tasks').delete().eq('id', id)
    if(error) return {error: error.message}
    revalidatePath(`/projects/${projectId}/tasks`)
}

export async function editTask(id: string, projectId: string, formData: { 
    title: string
    due_date: string | null
}){
    const supabase = await createClient();
    const {data: {user}} = await supabase.auth.getUser()
    if(!user) return {error: 'Not authenticated'}
    const {error} = await supabase.from('tasks').update({
        title: formData.title,
        due_date : formData.due_date || null
    }).eq('id', id)
    if(error) return {error: error.message}
    revalidatePath(`/projects/${projectId}/tasks`)
    return {success: true}
}