import { useState } from "react";
import { editClient } from "./actions";

type Client = {
    id: string
    name: string
    email: string | null
    company: string | null
}
export default function EditClientForm({
    client, 
    onCancel
}: {
    client : Client
    onCancel : () => void
}) {
    const [formData, setFormData] = useState<Client>({
        id: client.id,
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
            <form onSubmit={handleSubmit}>
                <h2>Edit Client</h2>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="rounded"/>
                    <label>Email</label>
                    <input type="text" name="email" value={formData.email?? ''} onChange={handleChange} className="rounded"/>
                    <label>Company</label>
                    <input type="text" name="company" value={formData.company?? ''} onChange={handleChange} className="rounded"/>
                    <button type="submit">Save</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    )
}