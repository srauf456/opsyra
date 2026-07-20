'use server'
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"


export async function addNote(projectId: string, formData:{
        title: string
        content: string
       
}){
const supabase = await createClient()
const {data: {user}} = await supabase.auth.getUser()
if(!user) return {error: "User not authenticated"}
const {error} = await supabase.from('notes').insert({
        title: formData.title,
        content: formData.content,
        project_id: projectId,
        user_id: user.id,
        ai_summary: null
})
if(error) {
        console.log(error)
        return({error: error.message})
}
revalidatePath(`/projects/${projectId}/notes`)
return {success: true}

}

export async function editNote(id: string, projectId: string, formData:{
    
    title: string
    content: string
}){
        const supabase = await createClient();
        const {data: {user}} = await supabase.auth.getUser()
        if(!user) return {error: 'Not authenticated'}
        const {error} = await supabase.from('notes').update({
                
                title: formData.title,
                content : formData.content
        }).eq('id', id)
        if(error) return {error: error.message}
        revalidatePath(`/projects/${projectId}/notes`)
        return {success: true}
}

export async function deleteNote(id: string){
        const supabase = await createClient()
        const {data: {user}} = await supabase.auth.getUser()
        if(!user) return {error: 'Not authenticated'}
        const {error} = await supabase.from('notes').delete().eq('id', id)
        if(error) return {error: error.message}
        revalidatePath('/notes')
        return {success: true}
}