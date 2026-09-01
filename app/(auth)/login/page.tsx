'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation' 
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

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
<div className="min-h-screen bg-white flex flex-col justify-center items-center px-4 overflow-hidden gap-3">
      <div className='w-full max-w-sm bg-white border border-gray-300 rounded-2xl p-8 space-y-6'>

         <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-2 mb-2">
             <span className="font-semibold text-blue-900 tracking-tight text-xl">Opsyra</span>
             </div>
             </div>

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

      <Button onClick={handleLogin} className="w-full text-white p-2">
       {loading ? 'Signing In' : 'Sign In'}
      </Button>
      
          <div className="text-center text-xs text-gray-500 pt-2 border-t border-gray-200">
          Don't have an account?{' '}
          <Link href="/signup" className="text-gray-900 hover:text-gray underline underline-offset-4">
            Sign Up
          </Link>
        </div>
    </div>
    </div>
    </div>
  )
}