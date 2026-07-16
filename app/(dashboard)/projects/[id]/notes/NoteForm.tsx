import { createClient } from "@/lib/supabase/client";
import { useState } from "react";

export default function NoteForm({projectId} : {projectId: string}){
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        ai_summary: ''
    })
    const [error, setError] = useState<string|null>(null)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
    })

    }
    const handleSubmit = (e:React.SyntheticEvent) =>{
        
    }
    return(
        <div>
        <h1>Add A Note</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
            <input type="text" name="content" value={formData.content} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
            <input type="text" name="ai_summary" value={formData.ai_summary} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
             <button type="submit">Add</button>
        </form>
        </div>
    )
}