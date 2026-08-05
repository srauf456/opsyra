export default function HowItWorks(){
    return(
        <section className="mx-auto max-w-7xl py-24 text-center px-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-black sm:text-4xl">How It Works</h2>
           <div className="grid grid-cols-3 gap-8 mt-6">
                <div className="border rounded-md border-gray-300 h-80 py-4">
                <div className="text-blue-800 font-bold text-lg mb-2">01</div>
                <h3 className="font-semibold text-gray-900">Add your clients and projects</h3>
                <p className="text-sm text-gray-500 mt-2">Start by adding your clients and creating projects for each one.</p>
                <p>Screenshot</p>
                </div>
                <div className="border rounded border-gray-300 h-80 py-4">
                    <div className="text-blue-800 font-bold text-lg mb-2">02</div>
                    <h3 className="font-semibold text-gray-900">Track tasks and take notes</h3>
                     <p>Add screenshot</p>
                </div>
                <div className="border rounded border-gray-300 h-80 py-4">
                    <div className="text-blue-800 font-bold text-lg mb-2">03</div>
                <h3 className="font-semibold text-gray-900">Let AI do the heavy lifting</h3>
                 <p>Add screenshot</p>
                </div>
           </div>
        </section>
    )
}