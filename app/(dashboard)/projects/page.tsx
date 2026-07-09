//fetch projects from db
//fetch clients from db, pass to form
//handle errors
//render project form and project list

import { createClient } from '@/lib/supabase/server'
import ProjectList from './ProjectList'
import ProjectForm from './ProjectForm'

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
        <div>
            <h1>Projects</h1>
            <ProjectList projects={projects??[]} clients={clients??[]}/>
            <ProjectForm clients={clients??[]}/>
        </div>
    )
}