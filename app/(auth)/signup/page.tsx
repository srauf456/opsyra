'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation' 
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function LoginPage() {
  const [fullName, setFullName] = useState('')  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading]= useState(false);
  const router  = useRouter();
  const supabase = createClient();
  

  const handleSignup = async () => {
    setError(null)
    setLoading(true)

    const {error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
            full_name : fullName,
        },
      },

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

      <Button onClick={handleSignup} className="bg-green-500 text-white p-2">
       {loading ? 'Creating account...' : 'Create Account'}
      </Button>
    </div>
  )
}