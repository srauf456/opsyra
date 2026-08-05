export default function Footer(){
    const date = new Date()
    return (
        <footer className="mx-auto max-w-7xl py-7 px-5 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-20">
                <div>
                    <p className="font-bold text-blue-900">Opsyra</p>
                    <p className="text-sm text-gray-500 mt-1">The workspace freelancers actually need.</p>
                    </div>
                <div className="flex flex-col">
                    <a href="#features">Features</a>
                    <a href="/signup">Signup</a>
                    <a href="/login">Login</a>
                    </div>
                    <div>
                    <p>Copyright: {date.getFullYear()} © Opsyra. Built by Sara</p>
                    </div>
               
            </div>
        </footer>
    )
}