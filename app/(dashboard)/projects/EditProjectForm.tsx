'use client'
import { SelectHTMLAttributes, useState } from "react";
import { editProject } from "./actions";
import { Project } from "@/lib/supabase/types";
type ProjectFormData = {
    client_id: string | null
    title: string
    description: string
    status: 'active' | 'paused' | 'done'
    due_date: string | null
}
export default function EditProjectForm({
    project, 
    onCancel,
    clients
}: {
    project : Project
    onCancel : () => void
    clients: {id: string, name: string}[]
}) {
    const [formData, setFormData] = useState<ProjectFormData>({
        title: project.title,
        description: project.description,
        status : project.status,
        due_date: project.due_date ?? '',
        client_id : project.client_id ?? ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e : React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            await editProject(project.id, formData)
            onCancel()
        } catch(error){
            console.log(error)
        }

    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Edit Project</h2>
                    <label>Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} className="rounded"/>
                    <label>Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} className="rounded"/>
                    <label>Due_date</label>
                    <input type="date" name="due_date" value={formData.due_date} onChange={handleChange} className="rounded"/>
                    <select name="status" id="status" onChange={handleChange} className="rounded">
                        <option value={"active"}>Active</option>
                        <option value={"paused"}>Paused</option>
                        <option value={"done"}>Done</option>
                    </select>
                    <select name="client_id" value={formData.client_id?? ''} onChange={handleChange}>
                    <option value="">No client</option>
                    {clients.map((client)=>(
                    <option key={client.id} value={client.id}>{client.name}</option>
                ))}
                </select> 
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    )
}

           
                
                