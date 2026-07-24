//queries
//handle errors
//pass data to view
import { createClient } from "@/lib/supabase/server"
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
            <p>Total clients: {count}</p>
            <p>Active Projects:
                {projectData?.map(project => project.title)}
            </p>
             <p>Pending Tasks:
                {taskData?.map(task => task.title)}
            </p>
            <p>Recent Projects:
                {recentProjectData?.map(recentProject => recentProject.title)}
            </p>
            <p>Upcoming Tasks:
                {upcomingTaskData?.map(upcomingTask => upcomingTask.title)}
            </p>
        </div>
    )


}