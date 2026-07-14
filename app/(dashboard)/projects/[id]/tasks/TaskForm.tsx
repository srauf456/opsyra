'use client'
import { useState } from "react"
import { addTask } from "./actions"
export default function TaskForm({projectId}: {projectId: string}){
    const [formData, setFormData] = useState({
        title: '',
        status: 'todo',
        due_date: '',

    })
    const [error, setError] = useState<string | null>(null)

    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) =>{
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const result = await addTask(projectId, formData);
        if(result.error){
            setError(result.error)
            return
        }
        setFormData({title:'', status: '', due_date:''})
        setError(null)
    }
return(
    <div>
        <h1>Add A Task</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
           <select name="status" id="status" onChange={handleChange} className="border p-2 rounded-md text-black bg-white">
                <option value={"todo"}>Todo</option>
                <option value={"in_progress"}>In Progress</option>
                <option value={"done"}>Done</option>
                </select>  
            <input type="date" name="due_date" value={formData.due_date} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
             <button type="submit">Add</button>
        </form>
    </div>
)
}

