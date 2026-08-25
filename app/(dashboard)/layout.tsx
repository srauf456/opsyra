import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({children}: {children: React.ReactNode}){
    return(
        <div className="flex min-h-screen bg-zinc-200 text-zinc-900">
            <Sidebar/>

            <main className="w-full flex-1">{children}</main>
        </div>
    
    )
}