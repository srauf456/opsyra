'use client'
import { deleteProject, editProject } from "./actions"
import { useState } from "react"
import EditProjectForm from "./EditProjectForm"
import { Client } from "../clients/ClientList"
import Link from 'next/link'
type Project = {
    id: string
    user_id: string 
    client_id: string | null
    title: string
    description: string
    status: 'active' | 'paused' | 'done'
    due_date: string
}
export default function ProjectList({projects, clients} : {projects : Project[], clients: Client[]}){
    const [editProjectId, setEditProjectId] = useState<string|null>(null)
     const handleEditToggle= (projectId: string) => {
    setEditProjectId(editProjectId === projectId ? null : projectId);
  };
     if(projects.length === 0) return <p>No projects.</p>
    return(
        <div>
        <ul>
        
        {projects.map((project)=> (
            <li key={project.id}>
            <div>
            <p>{project.title}</p>
            <p>{project.description}</p>
            </div>
             <button onClick={() => handleEditToggle(project.id)}>
                        {editProjectId === project.id ? "Close" : "Edit"}
                      </button>
                                        <button onClick={() => deleteProject(project.id)}>Delete</button>
                                        <Link href={`/projects/${project.id}/tasks`}> View Tasks</Link>
                                        {editProjectId === project.id && (
                                            <EditProjectForm project={project} onCancel={() => setEditProjectId(null)} clients={clients} />
                                        )}
            </li>
        ))
        }
        </ul>
        
        
        </div>
    )
}