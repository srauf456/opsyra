'use client'
import { useState } from "react"
import { editNote } from "./actions"
import { Note } from "@/lib/supabase/types"

type NoteFormData = {
    title: string
    content : string
}
export default function EditNoteForm({note, onCancel}: 
{note : Note
onCancel : () => void
}){
    const [formData, setFormData] = useState<NoteFormData>({
        title: note.title ?? '',
        content: note.content ?? ''
    })

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name , value} = e.target
    setFormData((prev) => ({...prev, [name] : value})
)}
const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
            try{
                await editNote(note.id, note.project_id?? '', formData)
                onCancel()
            } catch(error){
                console.log(error)
            }
}
     return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Edit Note</h2>
                    <label>Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} className="rounded"/>
                    <label>Content</label>
                    <textarea name="content" value={formData.content} onChange={handleChange} className="rounded"/>
                    <label>AI_Summary</label>
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    )
}