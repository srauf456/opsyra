'use client'
import { deleteClient, editClient } from "./actions"
import { useState } from "react"
import EditClientForm from "./EditClientForm"
import { Client } from "@/lib/supabase/types"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export default function ClientList({clients}: {clients : Client[] }){
    const [editClientId, setEditClientId] = useState<string|null>(null);
    const handleEditToggle = (clientId: string) => {
    setEditClientId(editClientId === clientId ? null : clientId);
  };
    if(clients.length === 0) return <Card>
        <p className="text-sm text-gray-400 text-center py-6">No clients. Add your first client.</p>
        </Card>
    return (
        <Card>
            <ul className="divide-y divide-gray-100">
                {clients.map((client) => (
                        <li key={client.id} className="py-4">
                            <div className="flex items-center justify-between">
                                <div>
                                <p className="text-sm font-medium text-gray-900">{client.name}</p>
                                <p className="text-xs text-gray-500 mt-0.5">
                                    {client.company && <span>{client.company}</span>}
                                    {client.company && client.email && <span className="mx-1"></span>}
                                    {client.email && <span>{client.email}</span>}
                                    
                                    </p>
</div>
                            </div>
                            <div className="flex items-center gap-2">
                             <Button onClick={() => handleEditToggle(client.id)}>
            {editClientId === client.id ? "Close" : "Edit"}
          </Button>
                            <Button variant="danger" onClick={() => deleteClient(client.id)}>Delete</Button>
                            </div>
                            {editClientId === client.id && (
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                <EditClientForm client={client} onCancel={() => setEditClientId(null)} />

                                </div>
                            )}
                             
                </li>

             ))}   
            </ul>
       
            </Card>
    )
}