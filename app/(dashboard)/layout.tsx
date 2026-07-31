import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({children}: {children: React.ReactNode}){
    return(
        <div>
            <Sidebar/>

            <main>{children}</main>
        </div>
    
    )
}