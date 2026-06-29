'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation' 
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading]= useState(false);
  const router  = useRouter();
  const supabase = createClient();
  

  const handleLogin = async () => {
    setError(null)
    setLoading(true)

    const {error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if(error){
        console.log(error)
        setError(error.message);
        setLoading(false);
        return
    }

    router.push('/dashboard')
    router.refresh()

  }

  return (
    <div className="p-6 flex flex-col gap-3 max-w-sm">
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
      />

      <Button onClick={handleLogin} className="bg-green-500 text-white p-2">
       {loading ? 'Signing In' : 'Sign In'}
      </Button>
    </div>
  )
}