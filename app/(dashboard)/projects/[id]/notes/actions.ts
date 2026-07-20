'use server'
import { createClient } from "@/lib/supabase/server"


export async function addNote(formData:{
        title: string
        content: string
        ai_summary: string
}){
const supabase = await createClient()
const {data: {user}} = await supabase.auth.getUser()

return {success: true}

}