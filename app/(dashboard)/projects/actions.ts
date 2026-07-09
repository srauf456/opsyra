'use server'
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
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
    due_date: string
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

    
   
    
    
    

