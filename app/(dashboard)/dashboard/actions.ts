'use server'
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY!})
 export async function weeklyReview(){
    const supabase = await createClient();
    const {data:{user}} = await supabase.auth.getUser()
    if(!user) return {error: "User not authenticated"}
    const {data, error} = await supabase.from('projects').select(`title, description, status, due_date,
    tasks (title, status),
    notes (title, ai_summary, content)`
    ).eq('status', 'active').eq('user_id', user.id)
    if(error) return {error: error.message}
    const projectsWithTasks = data
    const date = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
})
    const prompt = `You are a productivity assistant for freelancers.
    Analyze the following project data and generate a weekly report.
    Focus on project health, completed work, overdue tasks, and next priorities.
    Return ONLY plain text. Use this structure:
    - Weekly Report heading with today's date 
    - One paragraph per project
    - Bullet points for key deliverables and overdue items
    - A short overall summary at the end
    Here is the data:
    ${date}
    ${JSON.stringify(projectsWithTasks)}`

    const response = await ai.models.generateContent({
                model:'gemini-3.5-flash',
                contents: prompt
        })
    const weeklyReview = response.text || ''
    return weeklyReview


 }   