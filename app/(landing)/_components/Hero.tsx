export default function Hero(){
    return(
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-r from-blue-900 via-blue-300 to-blue-100">
             <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">

    </div>
    <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-50">
        <div className="grid grid-cols-2 gap-8">
          <div>
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-black sm:text-7xl">The Workspace for Freelancers</h1>
        <p className="mt-8 text-lg font-medium text-pretty text-black sm:text-xl/8">AI Assisted tool that manages clients, projects and notes in one place.</p>
       
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Get started For Free</a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
       
         <div className="mt-8 bg-blue-100 hidden sm:mb-8 sm:flex sm:justify-center h-80">
        <p>Screenshot coming soon</p>
        </div>
      </div> 
      </div>
      </div>
    )
}