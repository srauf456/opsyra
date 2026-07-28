'use client'
import { Project, Task } from "@/lib/supabase/types"
import { StatCard } from "@/components/dashboard/StatCard"
import { Card } from "@/components/ui/Card"

interface DashboardViewProps {
    clientCount: number,
    activeProjects : Project[],
    recentProjects: Project[],
    pendingTasks : Task[],
    upcomingTasks: Task[];
}

export default function DashboardView({clientCount, activeProjects, recentProjects, pendingTasks, upcomingTasks} : DashboardViewProps){
    return(
        <div>
        <div className="grid grid-cols-4 gap-4 mb-8">
             <StatCard title="Total clients" value={clientCount} />
             <StatCard title="Active Projects" value={activeProjects.length} />
             <StatCard title="Pending Tasks" value={pendingTasks.length} />
             <StatCard title="Upcoming Tasks" value={upcomingTasks.length} />
        </div>
        <div>
            <p>:
                {activeProjects?.map(project => (
                    <p key={project.id}>{project.title}</p>
                ))}
            </p>
             <p>:
                {pendingTasks?.map(task =>(
                    <p key={task.id}>{task.title}</p>
                ))}
            </p>
            <Card>
                <h3 className="text-gray-700">Recent Projects</h3>
                {recentProjects?.map(recentProject =>(
                    <p key={recentProject.id}>{recentProject.title}</p>
                ))}
                </Card>
             <Card>
                <h3 className="text-gray-700">Upcoming Tasks</h3>
                {upcomingTasks?.map(upcomingTask =>(
                    <p key={upcomingTask.id}>{upcomingTask.title}</p>
                ))}
                </Card>
            
        </div>
        </div>
            
        
    )
}