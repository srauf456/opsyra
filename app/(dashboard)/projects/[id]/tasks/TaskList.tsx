'use client'
import { useState } from "react"
import { updateTaskStatus, deleteTask, editTask } from "./actions"
import EditTaskForm from "./EditTaskForm"
import type { Task } from "@/lib/supabase/types"
import { Button } from "@/components/ui/Button"
export default function TaskList({tasks} : {tasks : Task[]}){
    const [editTaskId, setEditTaskId] = useState<string|null>(null)

    const handleEditToggle = (taskId: string) =>{
        setEditTaskId(editTaskId === taskId ? null : taskId);
    }
    if(tasks.length === 0) return <p>No tasks.</p>
    const nextStatus = {
        'todo' : 'in_progress',
        'in_progress' : 'done',
        'done': 'todo'
    } as const
    return (
        <div>
            <ul className="space-y-4">
                {tasks.map((task) => (
                    <li key={task.id}>
                        <div>
                            <p>{task.title}</p>
                            <p>{task.due_date ?? 'No due date'}</p>
                        </div> 
                        {task.ai_generated && (
                            <span className="text-xs bg-purple-100 text-purple-700 rounded-full">AI</span>
                        )}
                         <Button onClick={() => handleEditToggle(task.id)}>
                        {editTaskId === task.id ? "Close" : "Edit"}
                      </Button>
                        <Button onClick={()=> updateTaskStatus(task.id, nextStatus[task.status])}>{task.status}</Button>
                        
                        <Button onClick={()=>deleteTask(task.id, task.project_id)}>Delete Task</Button>
                         {editTaskId === task.id && (
                            <EditTaskForm task={task} onCancel={() => setEditTaskId(null)} />
                        )}
                       
                    </li>
                ))}
            </ul>
        </div>
    )


}