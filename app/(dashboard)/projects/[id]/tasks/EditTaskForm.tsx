'use client'
import { SelectHTMLAttributes, useState } from "react";
import { editTask } from "./actions";

type TaskFormData = {
    title: string
    due_date: string 
    id: string
    project_id: string
}
export default function EditTaskForm({
    task, 
    onCancel
}: {
    task : TaskFormData
    onCancel : () => void
   
}) {
    const [formData, setFormData] = useState<TaskFormData>({
        title: task.title,
        due_date: task.due_date ?? '',
        id: task.id,
        project_id: task.project_id
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e : React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            await editTask(task.id, task.project_id, formData)
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
                    <label>Due_date</label>
                    <input type="date" name="due_date" value={formData.due_date} onChange={handleChange} className="rounded"/>
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    )
}

           
                
                