import { createClient } from '@/lib/supabase/server'
import TaskList from './TaskList'
import TaskForm from './TaskForm'


export default async function Tasks({params} : {params: Promise<{id: string}>}){
    const {id: projectId} = await params
    const supabase = await createClient();
    const {data: tasks, error } = await supabase.from('tasks').select('*').eq('project_id', projectId)
    if(error){
        console.log("Error loading tasks", error)
        return "Error loading tasks"
    }
    return (
        <div>
            <TaskList tasks={tasks??[]}/>
            <TaskForm projectId={projectId}/>
        </div>
    )
}