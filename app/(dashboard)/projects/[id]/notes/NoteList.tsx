'use client'
import { useState } from "react"
import EditNoteForm from "./EditNoteForm"
import { deleteNote, summarizeNote } from "./actions"
import type { Note, Project } from "@/lib/supabase/types"


export default function NoteList({notes}: {notes: Note[]}){
    const [editNoteId, setEditNoteId] = useState<string|null>(null)
    const [summarizing, setSummarizing] = useState<string|null>(null)
    if(notes.length === 0) return <p>No notes.</p>
    const handleEditToggle = (noteId : string) => {
        setEditNoteId(editNoteId === noteId? null : noteId )
    }
    
    const handleSummarize = async (note: Note) =>{
        try{
            setSummarizing(note.id)
           await summarizeNote(note.id, note.project_id ?? '', note.title?? '', note.content)
        } catch(error){
            console.error("Error", error)
        } finally{
            setSummarizing(null)
        }
        
        
    }
   return(
        <div>
            <ul>
            {notes.map((note)=>(
                
                <li key={note.id}>
                    <div>
                        <p>{note.title}</p>
                        <p>{note.content}</p>
                    </div>
                    {note.ai_summary && (
                        <div>
                            <p>AI Summary</p>
                            <p>{note.ai_summary}</p>
                        </div>
                    )}
                    <button onClick={()=>handleEditToggle(note.id)}>
                        {editNoteId === note.id? 'Close' : 'Edit'}
                    </button>
                    <button onClick={() => deleteNote(note.id)}>Delete</button>
                    {editNoteId === note.id && (
                        <EditNoteForm note={note} onCancel={() => setEditNoteId(null)}  />
                        )}
                        <button onClick={()=>handleSummarize(note)} disabled={summarizing===note.id}>{summarizing === note.id ? "AI Summarizing..." : "Summarize Note"}</button>
                </li> 
                ))
                }
                </ul>
            

           
        </div>
    )
}