//fetch projects from db
//fetch clients from db, pass to form
//handle errors
//render project form and project list

import { createClient } from '@/lib/supabase/server'
import ProjectList from './ProjectList'
import ProjectForm from './ProjectForm'
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"

export default async function Projects(){
    //form the connection to db
    const supabase = await createClient();
    const {data: projects, error} = await supabase.from('projects').select('*')
    if(error){
        console.log("Error loading projects", error)
        return "Error loading projects."
    }
    const {data: clients, error: clientsError} = await supabase.from('clients').select('id, name')
    if(clientsError){
        console.log("Error loading clients", clientsError)
        return "Error loading clients."
    }
    
    return(
        <div className='space-y-6'>
            <h1 className='text-xl font-semibold text-gray-900'>Projects</h1>
            <p className='text-sm text-gray-500 mt-0.5'>Manage your projects</p>
            <ProjectList projects={projects??[]} clients={clients??[] }/>
            <ProjectForm clients={clients??[]}/>
        </div>
    )
}