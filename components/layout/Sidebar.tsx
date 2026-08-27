
'use client'
import { MdSpaceDashboard, MdPeople, MdFolderOpen } from "react-icons/md";
import Link from 'next/link'
import { usePathname } from "next/navigation";

const links = [
        {href: '/dashboard', label: 'Dashboard', icon: MdSpaceDashboard},
        {href: '/clients', label: 'Clients', icon: MdPeople},
        {href: '/projects', label: 'Projects', icon: MdFolderOpen}
        //settings
    ]

export default function Sidebar(){
    
    const pathname = usePathname()
return(
    <aside className="w-56 flex flex-col min-h-screen border-r border-gray-200 bg-white">
        <div className="h-16 flex items-center gap-2.5 border-b border-gray-200">
            <div className="rounded bg-blue-600 size-7 flex gap-2 items-center justify-center">
                 
                <MdSpaceDashboard className="mt-6 size-4 text-white"/>
                <span className="font-semibold text-gray-900">Opsyra</span>
            </div>
        </div>
        <nav className="flex flex-col gap-1 flex-1 p-4 mt-10">
            {links.map(({href, label, icon: Icon})=>{
                const isActive = pathname === href
                return (
                    <Link key={href} href={href} className={`flex items-center ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                      }`}>
                    <Icon className={`size-4 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                        {label}
                    </Link>
                        )  
})}
        </nav>
        <div className="p-4 border-t border-gray-200">
            <p className="text-xs text-gray-400 font-medium">Opsyra · {new Date().getFullYear()}</p>
        </div>
    </aside>
)

}

    
