'use client'
import { useState } from "react"
import {addProject} from "./actions"
//receive clients array through props
//formData uses useState
//handleChange for inputs
//handleSubmit will call add action from action.ts
export default function ProjectForm({clients}: { clients: {id:string, name: string}[]}){
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'active',
        due_date: '',
        client_id: '',
    })

    const [error, setError] = useState<string|null>(null)

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
    
     const {name, value} = e.target;
    setFormData({
         ...formData,
        [name] : value
})
}
const handleSubmit = async (e: React.SyntheticEvent) =>{
    e.preventDefault()
    const result = await addProject(formData)
      if(result.error){
            setError(result.error)
            return
        }
        setFormData({title:'', description: '', status: '', due_date:'', client_id: ''})
        setError(null)
        }

return(
    <div>
        <h1>Add A Project</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
            <textarea name="description" value={formData.description} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
            <select name="status" id="status" onChange={handleChange} className="border p-2 rounded-md text-black bg-white">
                <option value={"active"}>Active</option>
                <option value={"paused"}>Paused</option>
                <option value={"done"}>Done</option>
                </select>  
            <input type="date" name="due_date" value={formData.due_date} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
            <select name="client_id" value={formData.client_id} onChange={handleChange}>
                <option value="">No client</option>
                {clients.map((client)=>(
                    <option key={client.id} value={client.id}>{client.name}</option>
                ))}
                </select> 

            <button type="submit">Add</button>
        </form>
    </div>
)


}