'use client'

import Link from 'next/link'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card'

export default function Page() {
  const [progress, setProgress] = useState(0)

  // redirect to WhatsApp group after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 2, 100))
    }, 100)

    const timeout = setTimeout(() => {
      window.location.href = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_LINK!
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 bg-[#0066FF] p-4">
      <div className="bg-white p-6 rounded-3xl">
        <h1 className="text-5xl font-bold text-[#0066FF] text-center">VOUZ</h1>
        <p className="text-xl font-bold text-[#0066FF] text-center">CRM imobiliário</p>
      </div>

      <Card className="max-w-screen-sm text-center border-2 border-white">
        <CardHeader className="bg-[#0066FF] text-white rounded-t-md">
          <CardTitle>Redirecionando...</CardTitle>
          <CardDescription className="text-white">
            Em 5 segundos você será redirecionado para o grupo VIP de WhatsApp para corretores e imobiliárias.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
          <Loader2 className="size-6 animate-spin text-[#0066FF]" />
          <Progress value={progress} max={100} className="w-full" />
        </CardContent>

        {progress === 100 && (
          <CardFooter className="p-6">
            <Button asChild size="lg" className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white">
              <Link
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                href={process.env.NEXT_PUBLIC_WHATSAPP_GROUP_LINK!}
              >
                Entrar no Grupo VIP
              </Link>
            </Button>
          </CardFooter>
        )}
      </Card>
    </main>
  )
}
