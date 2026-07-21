'use client'
import { useState } from "react"
import EditNoteForm from "./EditNoteForm"
import { deleteNote } from "./actions"
import type { Note } from "@/lib/supabase/types"


export default function NoteList({notes}: {notes: Note[]}){
    const [editNoteId, setEditNoteId] = useState<string|null>(null)
    if(notes.length === 0) return <p>No notes.</p>
    const handleEditToggle = (noteId : string) => {
        setEditNoteId(editNoteId === noteId? null : noteId )
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
                    <button onClick={()=>handleEditToggle(note.id)}>
                        {editNoteId === note.id? 'Close' : 'Edit'}
                    </button>
                    <button onClick={() => deleteNote(note.id)}>Delete</button>
                    {editNoteId === note.id && (
                        <EditNoteForm note={note} onCancel={() => setEditNoteId(null)}  />
                        )}
                </li> 
                ))
                }
                </ul>
            

           
        </div>
    )
}