import { useState } from "react";
import { editClient } from "./actions";
import { Client } from "@/lib/supabase/types";
import { Button } from "@/components/ui/Button";

type ClientFormData = {
    name: string
    email : string
    company: string

}
export default function EditClientForm({
    client, 
    onCancel
}: {
    client : Client
    onCancel : () => void
}) {
    const [formData, setFormData] = useState<ClientFormData>({
        
        name: client.name,
        email: client.email ?? '',
        company: client.company ?? '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e : React.SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
        try{
            await editClient(client.id, formData)
            onCancel()
        } catch(error){
            console.log(error)
        }

    }

    
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <h2>Edit Client</h2>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="rounded"/>
                    <label>Email</label>
                    <input type="text" name="email" value={formData.email?? ''} onChange={handleChange} className="rounded"/>
                    <label>Company</label>
                    <input type="text" name="company" value={formData.company?? ''} onChange={handleChange} className="rounded"/>
                    <div className="flex gap-2">
                    <Button type="submit">Save</Button>
                    <Button type="button" variant="danger" onClick={onCancel}>Cancel</Button>
                    </div>
            </form>
        </div>
    )
}