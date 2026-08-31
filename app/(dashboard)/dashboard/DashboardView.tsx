'use client'
import { Project, Task } from "@/lib/supabase/types"
import { StatCard } from "@/components/dashboard/StatCard"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { weeklyReview } from "./actions"
import { useState } from "react"

interface DashboardViewProps {
    clientCount: number,
    recentProjects: Project[],
    pendingTasks : Task[],
    upcomingTasks: Task[];
}



export default function DashboardView({clientCount, recentProjects, pendingTasks, upcomingTasks} : DashboardViewProps){
    const [loading, setLoading] = useState(false)
    const [report, setReport] = useState<null|string>(null)
    const handleWeeklyReview = async () => {
        setLoading(true)
        const result = await weeklyReview()
        if(typeof result === 'string') setReport(result)
        setLoading(false)
    }
    const handleDownload = () => {
        const {jsPDF} = require('jspdf')
        const doc = new jsPDF()
        const lines = doc.splitTextToSize(report || '', 180)
        doc.text(lines, 15, 15)
        doc.save('weekly-review.pdf')
    }
    return(
        <div className="space-y-6">
            <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-0.5">Here's what's happening with your work.</p>
        </div>
        <Button onClick={handleWeeklyReview} isLoading={loading} variant="secondary">
          Generate Weekly Review
        </Button>
      </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
             <StatCard title="Total clients" value={clientCount} />
             <StatCard title="Pending Tasks" value={pendingTasks.length} />
             <StatCard title="Upcoming Tasks" value={upcomingTasks.length} />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <Card>
                <h3 className="font-semibold text-gray-900 mb-3">Recent Projects</h3>
                {recentProjects.length === 0? (
                    <p className="text-sm text-gray-400">No projects yet</p>
                ) : (
                    <ul className="space-y-2">
                        {recentProjects?.map(recentProject =>(
                    <li key={recentProject.id} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{recentProject.title}</span>
                        <span className={`text-xs ${recentProject.status === 'active' ? 'bg-green-50 text-green-700' :
                            recentProject.status === 'paused' ? 'bg-yellow-50 text-yellow-700' :
                            'bg-gray-100 text-gray-500'
                        }`}>{recentProject.status}
                        </span>
                        </li>
                ))}
                    </ul>
                )}
                
            </Card>
            <Card>
                <h3 className="font-semibold text-gray-900 mb-3">Pending Tasks</h3>
                {pendingTasks.length === 0? (<p className="text-sm text-gray-400">No pending tasks</p>
                ) : 
                <ul className="space-y-2">
                {pendingTasks?.map(pendingTask => (
                    <li key={pendingTask.id}>
                    <span className="text-sm text-gray-700">{pendingTask.title}</span>
                    <span className="text-xs text-gray-400">{pendingTask.due_date}</span></li>
                )
                )}</ul>
                }
                
            </Card>
            <Card>
                <h3 className="text-gray-700">Upcoming Tasks</h3>
                {upcomingTasks.length === 0? (<p className="text-sm text-gray-400">No upcoming tasks yet</p>
                ) : 
                <ul className="space-y-2">
                {upcomingTasks?.map(upcomingTask => (
                    <li key={upcomingTask.id}>
                    <span className="text-sm text-gray-700">{upcomingTask.title}</span>
                    <span className="text-xs text-gray-400">{upcomingTask.due_date}</span></li>
                )
                )}</ul>
                }
                
            </Card>
            
        </div>
         {report && (
            <Card>
            <div className="flex mb-4 items-center justify-between">
                <h3>Weekly Review</h3>
                
                <Button onClick={handleDownload}>Download PDF</Button>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{report}</p>
                </div>
            </Card>
         )}
        </div>
            
        
    )
}