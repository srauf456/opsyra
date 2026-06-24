import { createClient } from '@/lib/supabase/supabaseServer'

export default async function Clients() {
    const supabase = await createClient();
    const {data: clients, error} = supabase.from('clients').select('*')
if(error){
    console.error("Error fetching clients", error);
    return <p>Error loading clients.</p>
}

return (
    <div>
        {clients?.length === 0 && <p>No clients yet</p>}
        <h1>Clients List:</h1>
        <ul>
        {clients?.map((client) => (
            <li key={client.id}>{client.name}</li>
        )

        )}
        </ul>
    </div>
)


}