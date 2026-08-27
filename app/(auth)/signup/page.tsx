'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation' 
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { RiSparklingLine,RiAlertLine } from 'react-icons/ri'
import Link from 'next/link'

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
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4 overflow-hidden gap-3">
      <div className='w-full max-w-sm bg-white border border-gray-300 rounded-2xl p-8 space-y-6'>

         <div className="text-center space-y-1">
          <div className="inline-flex items-center gap-2 mb-2">
        <div className="size-6 rounded bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <RiSparklingLine className="size-3.5" />
            </div>
             <span className="font-semibold text-blue-900 tracking-tight">Opsyra</span>
             </div>
             </div>
      <div className='space-y-4'>
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

      <Button onClick={handleSignup} className="w-full p-2">
       {loading ? 'Creating account...' : 'Create Account'}
      </Button>
      </div>

          <div className="text-center text-xs text-gray-500 pt-2 border-t border-gray-200">
          Already have an account?{' '}
          <Link href="/login" className="text-gray-900 hover:text-gray underline underline-offset-4">
            Log in
          </Link>
        </div>
    </div>
    </div>
  )
}