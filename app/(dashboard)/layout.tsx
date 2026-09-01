'use client'
import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import { MdMenu } from "react-icons/md";

export default function DashboardLayout({children}: {children: React.ReactNode}){
    const [sidebarOpen, setSidebarOpen] = useState(false)
    
    return(
        <div className="flex flex-row min-h-screen bg-zinc-200 text-zinc-900">
            <div className="flex flex-1 flex-col md:flex-row">
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/30 z-20 lg:hidden"
                onClick={()=>setSidebarOpen(false)}/>
            )}
            <div className={`fixed inset-y-0 left-0 z-30 lg:static lg:block transform transition-transform duration-200
                 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
            <Sidebar onClose={() => setSidebarOpen(false)}/>
             </div>
            <header className="h-16 border-b border-gray-200 px-4 flex items-center lg:hidden ">
                <button onClick={()=>setSidebarOpen(true)} className="p-2 text-gray-500 hover:bg-gray-100">
                    <MdMenu className="size-5"/>
                </button>
                <span className="font-semibold text-gray-900">Opsyra</span>
            </header>
           

            <main className="p-6 flex-1 wd-full">{children}</main>
        </div>
        </div>
    
    )
}