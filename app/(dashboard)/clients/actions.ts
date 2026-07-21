'use server'
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function addClient(formData: {
    name: string,
    email: string,
    company: string
})
{
    const supabase = await createClient();
     const {data: {user}} = await supabase.auth.getUser()
     if(!user) return {error: 'Not authenticated'}

     const {error} = await supabase.from('clients').insert({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            user_id: user.id
        })

    if(error){
            return {error: error.message}
        }
    revalidatePath('/clients')
    return {success: true}
}

export async function deleteClient(id:string) {
    const supabase = await createClient();
    const {data: {user}} = await supabase.auth.getUser()
    if(!user) return {error: 'Not authenticated'}

    const {error} = await supabase.from('clients').delete().eq('id', id)
    if(error) return {error: error.message}
    revalidatePath('/clients')
    return {success: true}
}

export async function editClient(id: string, formData: {
     name: string,
    email: string | null,
    company: string | null

}){
    const supabase = await createClient();
     const {data: {user}} = await supabase.auth.getUser()
    if(!user) return {error: 'Not authenticated'}
    const {error} = await supabase.from('clients').update({
        name: formData.name,
        email: formData.email,
        company: formData.company,
    }).eq('id', id)
    if(error) return {error: error.message}
    revalidatePath('/clients')
    return {success: true}
}