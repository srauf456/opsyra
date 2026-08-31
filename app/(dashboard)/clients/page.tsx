import { createClient } from '@/lib/supabase/server'
import ClientForm from './ClientForm';
import ClientList from './ClientList';

export default async function Clients() {
    const supabase = await createClient();
    const {data: clients, error} = await supabase.from('clients').select('*')
if(error){
    // console.error("Error fetching clients", error);
    return <p className='text-sm text-red-500'>Error loading clients.</p>
}



return (
    <div className='space-y-6'>
        <div>
            <h1 className='text-xl font-semibold text-gray-900'>Clients</h1>
            <p className='text-sm text-gray-500 mt-0.5'>Manage your clients</p>
        </div>
        <ClientForm/>
        <ClientList clients={clients??[]}/>
     
    </div>
)


}