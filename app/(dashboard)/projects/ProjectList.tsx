'use client'
import { deleteProject, editProject, generateTasks } from "./actions"
import { useState } from "react"
import EditProjectForm from "./EditProjectForm"
import Link from 'next/link'
import type { Project, Client } from "@/lib/supabase/types"
export default function ProjectList({projects, clients} : {projects : Project[], clients: {id: string, name: string}[]}){
    const [editProjectId, setEditProjectId] = useState<string|null>(null)
    const [generating, setGenerating] = useState<string|null>(null)
    const handleGenerate = async (project: Project) => {
        setGenerating(project.id)
        try{
            await generateTasks(project.id, project.title, project.description)
        } finally {
            setGenerating(null)
        }
    }
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
                <button onClick={()=>handleGenerate(project)} disabled={generating===project.id}>{generating===project.id ? 'Generating...' : 'Generate Tasks'}</button>
            </li>

        ))
        }
        </ul>
        
        
        </div>
    )
}
