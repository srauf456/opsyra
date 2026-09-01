'use client'
import React, {useState} from "react"
import { addClient } from "./actions"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
export default function ClientForm(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
    })
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = async (e: React.SyntheticEvent) =>{
        e.preventDefault()
        setLoading(true)
        const result = await addClient(formData)
        if(result?.error){
            setError(result.error)
            setLoading(false)
            return
        }
        setFormData({name:'', email: '', company:''})
        setError(null)
        setLoading(false)
    }

    return(
        <Card>
            <h2 className="text-sm font-semibold text-gray-900 mb-4">Add A Client</h2>
            {error && <p className="text-xs text-red-500 mb-3">{error}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
                <input type="text" placeholder="Company" name="company" value={formData.company} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
                <input type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} className="border p-2 rounded-md text-black bg-white"/>
                <Button type="submit" isLoading={loading} className="self-start">Add</Button>
            </form>
        </Card>
    )

}