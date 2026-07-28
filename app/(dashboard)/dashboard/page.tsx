//queries
//handle errors
//pass data to view
import { createClient } from "@/lib/supabase/server"
import DashboardView from "./DashboardView"
export default async function Dashboard(){
    const supabase = await createClient()
    const {count, error: clientError} = await supabase.from('clients').select('*', {count: 'exact', head: true})
    if(clientError){
        console.error(clientError)
        return
    }
    const {data: projectData, error : projectError} = await supabase.from('projects').select('*').eq('status','active')
    if(projectError){
        console.error(projectError)
        return
    }
    const {data: taskData, error: taskError} = await supabase.from('tasks').select('*').in('status', ['in_progress', 'todo'])
    if(taskError){
        console.log(taskError)
        return
    }
    const {data: recentProjectData, error: recentProjectDataError} = await supabase.from('projects').select('*').order('created_at',
        {ascending: false}).limit(3)
        if(recentProjectDataError){
            console.log(recentProjectDataError)
            return
        }
    const {data: upcomingTaskData, error: upcomingTaskDataError} = await supabase.from('tasks').select('*').not('due_date', 'is', null).order('due_date', {ascending: true}).limit(3)
        if(upcomingTaskDataError){
            console.log(upcomingTaskDataError)
            return
        }
    return(
        <div>
            <p>Welcome</p>
            <DashboardView clientCount={count ?? 0} activeProjects={projectData ?? []} pendingTasks={taskData ?? []}
            recentProjects={recentProjectData ?? []} upcomingTasks={upcomingTaskData ?? []} />
           
        </div>
    )


}