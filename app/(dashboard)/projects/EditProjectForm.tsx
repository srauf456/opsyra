'use client'
import { SelectHTMLAttributes, useState } from "react";
import { editProject } from "./actions";
import { Project } from "@/lib/supabase/types";

import { Button } from "@/components/ui/Button";
type ProjectFormData = {
    client_id: string | null
    title: string
    description: string
    status: 'active' | 'paused' | 'done'
    due_date: string 
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <h2>Edit Project</h2>
                    <label>Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
                    <label>Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
                    <label>Due_date</label>
                    <input type="date" name="due_date" value={formData.due_date} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
                    <select name="status" id="status" onChange={handleChange} className="border p-2 rounded-md text-black bg-white">
                        <option value={"active"}>Active</option>
                        <option value={"paused"}>Paused</option>
                        <option value={"done"}>Done</option>
                    </select>
                    <select name="client_id" value={formData.client_id?? ''} onChange={handleChange} className="border p-2 rounded-md text-black bg-white">
                    <option value="">No client</option>
                    {clients.map((client)=>(
                    <option key={client.id} value={client.id}>{client.name}</option>
                ))}
                </select>
                <div className="flex gap-2">
                    <Button type="submit">Save</Button>
                    <Button type="button" onClick={onCancel}>Cancel</Button>
                    </div> 
            </form>
        </div>
    )
}

           
                
                