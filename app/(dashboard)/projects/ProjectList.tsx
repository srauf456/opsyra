'use client'
import { deleteProject, editProject, generateTasks } from "./actions"
import { useState } from "react"
import EditProjectForm from "./EditProjectForm"
import Link from 'next/link'
import type { Project, Client } from "@/lib/supabase/types"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
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
     if(projects.length === 0) return 
     <Card>
        <p className="text-sm text-gray-400 text-center py-6">No projects.</p>
        </Card>
     
    return(
        <Card>
        <ul className="divide-y divide-gray-100">
        
        {projects.map((project)=> (
            <li key={project.id} className="py-4">
                <div className="flex items-center justify-between">
                    <div className="flex-1 mr-4">
                        <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-gray-900">{project.title}</p>
                    <span className={`text-xs ${project.status === 'active' ? 'bg-green-50' : project.status=== 'paused'?
                    'bg=yellow-50' : 'bg-gray-100'}`}>
                        {project.status}
                    </span>
                    
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">{project.description}</p>
                    {project.due_date && (
                        <p className="text-xs text-gray-400">Due: {project.due_date}</p>
                    )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                
                
                <Link href={`/projects/${project.id}/tasks`} className="text-xs text-blue-600 hover:underline">Tasks</Link>
                <Link href={`projects/${project.id}/notes`} className="text-xs text-blue-600 hover:underline">Notes</Link>
                <Button variant="secondary" onClick={()=>handleGenerate(project)} disabled={generating===project.id}>{generating===project.id ? 'Generating...' : 'AI Tasks'}</Button>
                <Button variant= "secondary" onClick={() => handleEditToggle(project.id)}>
                    {editProjectId === project.id ? "Close" : "Edit"}
                </Button>
                <Button variant="danger" onClick={() => deleteProject(project.id)}>Delete</Button>
                </div>
                </div>
                {editProjectId === project.id && (
                   <div className="mt-4 pt-4 border-t border-gray-100">
                 <EditProjectForm project={project} onCancel={() => setEditProjectId(null)} clients={clients} />

                 </div>
                
                )}
                
            </li>

        ))
        }
        </ul>
        
        
        </Card>
    )
}
