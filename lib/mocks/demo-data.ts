const date = new Date()
const today= date.toISOString().split('T')[0]
export const demoClients = [
    { id: '1', name: 'Acme Studio', email: 'hello@acme.io', company: 'Acme Studio' },
    { id: '2', name: 'Kroma Labs', email: 'dev@kromalabs.com', company: 'Kroma Labs' },
    { id: '3', name: 'Solo Ventures', email: 'founder@solo.co', company: 'Solo Ventures' },
]

export const demoProjects = [
  {
    id: '1',
    title: 'Brand Website Redesign',
    description: 'Full redesign of marketing site with new brand guidelines.',
    status: 'active',
    due_date: '2026-09-15',
    client_id: '1',
    tasks: [
      { id: '1', title: 'Create wireframes', status: 'done', ai_generated: false },
      { id: '2', title: 'Design homepage', status: 'in_progress', ai_generated: true },
      { id: '3', title: 'Build contact form', status: 'todo', ai_generated: true },
      { id: '4', title: 'SEO setup', status: 'todo', ai_generated: false },
    ]
  },
  {
    id: '2',
    title: 'Mobile App MVP',
    description: 'React Native app for client\'s e-commerce platform.',
    status: 'active',
    due_date: '2026-10-01',
    client_id: '2',
    tasks: [
      { id: '5', title: 'Setup project structure', status: 'done', ai_generated: false },
      { id: '6', title: 'Build auth flow', status: 'done', ai_generated: false },
      { id: '7', title: 'Product listing screen', status: 'in_progress', ai_generated: true },
    ]
  },
  {
    id: '3',
    title: 'Dashboard Analytics',
    description: 'Internal analytics dashboard for tracking KPIs.',
    status: 'paused',
    due_date: today,
    client_id: '3',
    tasks: [
      { id: '8', title: 'Define metrics', status: 'done', ai_generated: false },
      { id: '9', title: 'Design charts', status: 'todo', ai_generated: false },
    ]
  },
]

export const demoNotes = [
  {
    id: '1',
    title: 'Discovery Call — Acme Studio',
    content: 'Client wants dark mode. Budget approved $6,000. Need proposal by Friday.',
    ai_summary: 'Key deliverables: dark mode UI, $6,000 budget approved. Action item: send proposal before Friday.',
    project_id: '1',
  },
  {
    id: '2',
    title: 'Kickoff Meeting — Mobile App',
    content: 'React Native preferred. Launch target Q4. Need weekly updates.',
    ai_summary: 'Tech stack confirmed: React Native. Q4 launch target. Client expects weekly status updates.',
    project_id: '2',
  },
]