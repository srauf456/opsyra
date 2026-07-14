'use client'
import { useState } from "react"
import { updateTaskStatus, deleteTask, editTask } from "./actions"
import EditTaskForm from "./EditTaskForm"

type Task = {
    id: string
    user_id: string 
    project_id: string 
    title: string
    status: 'todo' | 'in_progress' | 'done'
    due_date: string | null
    ai_generated: boolean
}
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
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <div>
                            <p>{task.title}</p>
                            <p>{task.due_date ?? 'No due date'}</p>
                        </div>
                         <button onClick={() => handleEditToggle(task.id)}>
                        {editTaskId === task.id ? "Close" : "Edit"}
                      </button>
                        <button onClick={()=> updateTaskStatus(task.id, nextStatus[task.status])}>{task.status}</button>
                        
                        <button onClick={()=>deleteTask(task.id, task.project_id)}>Delete Task</button>
                         {editTaskId === task.id && (
                            <EditTaskForm task={task} onCancel={() => setEditTaskId(null)} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )


}