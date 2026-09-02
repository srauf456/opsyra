import Link from "next/link"
export default function Header(){
    return(
        <header className="bg-white border-b border-gray-200 sticky z-40 top-0">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href={'/'} className="text-xl font-bold text-blue-800">Opsyra</Link>
                </div>
                <nav className="flex gap-5">
                    <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900" >Features</Link>
                    <Link href={'/demo'} className="text-sm text-gray-600 hover:text-gray-900">Demo</Link>
                    <Link href="#contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="/login" className="mx-3 block text-gray-900 px-4 py-2 text-sm font-semibold shadow-xs rounded-md hover:bg-gray-50">Login</Link>
                    <Link href="/signup" className="bg-blue-800 text-white text-sm text-gray-900 px-4 py-2 font-medium font-semibold shadow-xs rounded-md hover:bg-blue-900">Get Started</Link>
                </div>
                </div>
            </div>
        </header>
    )
}