
'use client'
import { MdSpaceDashboard, MdPeople, MdFolderOpen } from "react-icons/md";
import Link from 'next/link'
import { usePathname } from "next/navigation";
export default function Sidebar(){
    const links = [
        {href: '/dashboard', label: 'Dashboard', icon: MdSpaceDashboard},
        {href: '/clients', label: 'Clients', icon: MdPeople},
        {href: '/projects', label: 'Projects', icon: MdFolderOpen}
        //settings
    ]
    const pathname = usePathname()
return(
    <div className="w-56 flex flex-col min-h-screen border-r">
       <div className="flex gap-2 items-center">
                 
                 <MdSpaceDashboard className="mt-6 size-9 text-blue-600 bg-blue-300"/>
                 <span>Opsyra</span>
                </div>
                <nav className="flex flex-col gap-1 p-4 mt-10">
                    {links.map(({href, label, icon: Icon})=>(
                      <Link key={href} href={href} className={pathname === href ? 'bg-blue-50 text-blue-600' : 'text-gray-600'
                      }>
                        <Icon />
                        {label}
                      </Link>  
                    ))}
           </nav>
    </div>
)

}

    
