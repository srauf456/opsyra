'use client'
import { deleteClient, editClient } from "./actions"
import { useState } from "react"
import EditClientForm from "./EditClientForm"
export type Client = {
    id: string
    name: string
    email: string | null
    company: string | null
}
export default function ClientList({clients}: {clients : Client[] }){
    const [editClientId, setEditClientId] = useState<string|null>(null);
    const handleEditToggle = (clientId: string) => {
    setEditClientId(editClientId === clientId ? null : clientId);
  };
    if(clients.length === 0) return <p>No clients.</p>
    return (
        <div>
            <ul>
                {clients.map((client) => (
                        <li key={client.id}>
                            <div>
                                <p>{client.name}</p>
                                <p>{client.company}</p>

                            </div>
                             <button onClick={() => handleEditToggle(client.id)}>
            {editClientId === client.id ? "Close" : "Edit"}
          </button>
                            <button onClick={() => deleteClient(client.id)}>Delete</button>
                            {editClientId === client.id && (
                                <EditClientForm client={client} onCancel={() => setEditClientId(null)} />
                            )}
                             
                </li>

             ))}   
            </ul>
       
            </div>
    )
}