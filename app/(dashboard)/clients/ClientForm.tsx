'use client'
import React, {useState} from "react"
import { addClient } from "./actions"
export default function ClientForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
    })
    const [error, setError] = useState<string | null>(null)
    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const result = await addClient(formData)
        if(result.error){
            setError(result.error)
            return
        }
        setFormData({name:'', email: '', company:''})
        setError(null)
    }

    return(
        <div>
            <h2>Add A Client</h2>
            <form onSubmit={handleSubmit} className="bg-gray-50">
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
                <input type="text" name="email" value={formData.email} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )

}