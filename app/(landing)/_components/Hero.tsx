import Link from "next/link"
import { RiArrowRightLine, RiSparklingFill } from "react-icons/ri"
export default function Hero(){
    return(
      <section >
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-r from-white via-gray-300 to-gray-100">
             <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">

            </div>
          <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-50">
            <div className="grid grid-cols-2 gap-8">
                <div>
                  <h1 className="text-5xl font-semibold tracking-tight text-balance text-blue-800 sm:text-7xl">The Workspace for Freelancers</h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-black sm:text-xl/8">Opsyra combines client CRM, project delivery, and AI note-to-task structuring into one focused space.</p>
       
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link href="/signup" className="rounded-md bg-blue-900 px-4 py-2.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Start Free Workspace <RiArrowRightLine/></Link>
                  <Link href="/demo" className="text-sm/6 font-semibold text-gray-900">View Demo</Link>
                </div>
            </div>
       
            
          <div className="mt-14 rounded-xl border border-gray-800 bg-white p-2 shadow-2xl backdrop-blur">
            <div className="rounded-lg border border-zinc-800 bg-white-950 p-4 text-left font-mono text-xs text-zinc-400">
              
              <img src="/OpsyraDashboard.png"/>
   
          </div>
          </div> 
          </div>
        </div>
      </div>
      </section>
    )
}

        