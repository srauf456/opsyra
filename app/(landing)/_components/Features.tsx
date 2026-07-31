import { MdOutlinePerson, MdOutlineTimer, MdAutoAwesome } from "react-icons/md"
export default function Features(){
    return (
    <section id="features" className="bg-blue-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-10 mt-16">
        <div className="relative pl-16">
          <h3 className="text-base/7 font-semibold text-gray-900">
            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-600">
            <MdOutlinePerson className="size-6 text-white"/>
            </div>
            Client Management
          </h3>
          <p className="mt-2 text-base/7 text-gray-600">Keep all your client info in one place.</p>
        </div>
        <div className="relative pl-16">
          <h3 className="text-base/7 font-semibold text-gray-900">
            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-600">
              <MdOutlineTimer className="size-6 text-white"/>
            </div>
            
            Project Tracking
          </h3>
          <p className="mt-2 text-base/7 text-gray-600">Manage projects, tasks and deadlines</p>
        </div>
        <div className="relative pl-16">
          <h3 className="text-base/7 font-semibold text-gray-900">
            <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-blue-600">
              <MdAutoAwesome className="size-6 text-white"/>
            </div>
            
            AI Assistance
          </h3>
          <p className="mt-2 text-base/7 text-gray-600">Let AI generate tasks and summarize notes</p>
        </div>
        </div>
      </div>
    </section>
    )
}