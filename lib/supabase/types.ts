export type Client = {
    id: string
    user_id: string
    name: string
    email: string | null
    company: string | null
    created_at: string
}

export type Project = {
    id: string
    user_id: string 
    client_id: string | null
    title: string
    description: string
    status: 'active' | 'paused' | 'done'
    due_date: string | null
    created_at: string
}

export type Task = {
    id: string
    user_id: string 
    project_id: string 
    title: string
    status: 'todo' | 'in_progress' | 'done'
    due_date: string | null
    ai_generated: boolean
    created_at: string
}

export type Note = {
    id: string
    user_id: string
    project_id: string | null
    title: string | null
    content: string
    ai_summary: string | null
    created_at: string
}