import { createClient } from "@/lib/supabase/server";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

export default async function Notes({params} : {params: Promise<{id:string}>}) {
    const {id: projectId} = await params
    const supabase = await createClient()
    const {data: notes, error} = await supabase.from('notes').select('*').eq('project_id', projectId)
    if(error) {
        console.log(error)
        return "Error loading notes"
    }
    return (
        <div>
            <NoteForm projectId={projectId}/>
            <NoteList notes={notes}/>
        </div>
    )
}