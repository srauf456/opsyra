import { createClient } from '@/lib/supabase/server'
import ClientForm from './ClientForm';
import ClientList from './ClientList';

export default async function Clients() {
    const supabase = await createClient();
    const {data: clients, error} = await supabase.from('clients').select('*')
if(error){
    console.error("Error fetching clients", error);
    return <p>Error loading clients.</p>
}



return (
    <div>
        
        <h1>Clients</h1>
        <ClientForm/>
        <ClientList clients={clients??[]}/>
     
    </div>
)


}