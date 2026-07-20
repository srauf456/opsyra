'use client'
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import {addNote} from './actions'

export default function NoteForm({projectId} : {projectId: string}){
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    })
    const [error, setError] = useState<string|null>(null)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
    })

    }
    const handleSubmit = async (e:React.SyntheticEvent) =>{
        e.preventDefault()
       const result = await addNote(projectId, formData)
       if(result.error){
        setError(result.error)
        return 
       }
       setFormData({
        title: '',
        content: ''
    })
    setError(null)
    }
    return(
        <div>
        <h1>Add A Note</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
            <textarea name="content" value={formData.content} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
            
             <button type="submit">Add</button>
        </form>
        </div>
    )
}