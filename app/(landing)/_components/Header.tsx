'use client'
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { MdClose, MdMenu } from "react-icons/md"
import { useState } from "react"
export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <header className="bg-white border-b border-gray-200 sticky z-40 top-0">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href={'/'} className="text-xl font-bold text-blue-800">Opsyra</Link>
                
                <nav className="hidden md:flex gap-5">
                    <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900" >Features</Link>
                    <Link href={'/demo'} className="text-sm text-gray-600 hover:text-gray-900">Demo</Link>
                    <Link href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
                </nav>
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="mx-3 block text-gray-900 px-4 py-2 text-sm font-semibold shadow-xs rounded-md hover:bg-gray-50">Login</Link>
                    <Link href="/signup" className="bg-blue-800 text-white text-sm text-gray-900 px-4 py-2 font-medium font-semibold shadow-xs rounded-md hover:bg-blue-900">Get Started</Link>
                </div>
                <Button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden text-gray-500 rounded-md hover:bg-gray-100 p-2">
                    {menuOpen ? <MdClose className="size-5"/> : <MdMenu className="size-5"/>}</Button>
                </div>

                {menuOpen && (
                    <div className="md:hidden pt-4 pb-2 flex flex-col gap-3 border-t border-gray-100 mt-4">
                        <Link href="#features" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 py-1">Features</Link>
                        <Link href="/demo" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 py-1">Demo</Link>
                        <Link href="#contact" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 py-1">Contact</Link>
                        <div className="flex gap-3 pt-2">
                            <Link href="/login" className="text-sm font-medium text-gray-900 px-4 py-2 border border-gray-200 rounded-md">Login</Link>
                            <Link href="/signup" className="text-sm font-medium bg-blue-800 text-white px-4 py-2 rounded-md">Get Started</Link>
            
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}