import Link from 'next/link'
import { demoClients, demoProjects, demoNotes } from '@/lib/mocks/demo-data'

export default async function DemoPage(){
    const activeProjects = demoProjects.filter(p => p.status === 'active')
    const pendingTasks = demoProjects.flatMap(p => p.tasks).filter(t => t.status !=='done')
    const upcomingTasks = demoProjects.flatMap(p => p.tasks).filter(t => t.status !=='done')

return(
    <div className='min-h-screen bg-gray-50'>
    <div className='bg-blue-800 text-white text-center py-2 text-sm'>
        You're viewing a live demo of Opsyra. {' '}
         <Link href="/signup" className="underline font-medium">
          Create your free account →
        </Link>
    </div>
         <header className="bg-white border-b border-gray-200 sticky z-40 top-0">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href={'/'} className="text-xl font-bold text-blue-800">Opsyra</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/login" className="mx-3 block text-gray-900 px-4 py-2 text-sm font-semibold shadow-xs rounded-md hover:bg-gray-50">Login</Link>
                    <Link href="/signup" className="bg-blue-800 text-white text-sm text-gray-900 px-4 py-2 font-medium font-semibold shadow-xs rounded-md hover:bg-blue-900">Get Started</Link>
                </div>
                </div>
            </div>
        </header>

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        
        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Total Clients', value: demoClients.length },
            { label: 'Pending Tasks Today', value: pendingTasks.length },
            { label: 'Upcoming Tasks', value: upcomingTasks.length },
          ].map(stat => (
            <div key={stat.label} className="bg-white border border-gray-200 rounded-xl p-5">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

         {/* Projects */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Projects</h2>
         
            <ul className="divide-y divide-gray-100">
              {demoProjects?.map(project => (
                <li key={project.id} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{project.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">
                      {project.tasks?.length ?? 0} tasks
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-700 font-medium">
                      {project.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
        </div>

               {/* Clients */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-gray-900 mb-4">Clients</h2>
            <ul className="divide-y divide-gray-100">
              {demoClients?.map(client => (
                <li key={client.id} className="py-3">
                  <p className="text-sm font-medium text-gray-900">{client.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {client.company}{client.company && client.email && ' · '}{client.email}
                  </p>
                </li>
              ))}
            </ul>
        </div>

         {/* CTA */}
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900">Ready to organize your work?</h3>
          <p className="text-sm text-gray-500 mt-2">Create your free account and connect your clients and projects. Let AI do the heavy lifting.</p>
          <Link href="/signup" className="mt-4 inline-block bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">
            Get Started Free
          </Link>
        </div>

        </main>
    </div>
)
}