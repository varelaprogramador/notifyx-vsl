'use client'

import { useModalCaptacao } from '@/hooks/use-modal-captacao'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { PhoneInput } from '@/components/phone-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Sparkles } from 'lucide-react'
import axios from 'axios'

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Email inválido.' }),
  phone: z.string().min(10, { message: 'Telefone inválido.' }),
  ideia: z
    .string()
    .min(10, { message: 'Descreva sua ideia com pelo menos 10 caracteres.' }),
})

export const ModalCaptacao = () => {
  const { isOpen, onClose } = useModalCaptacao()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', phone: '', ideia: '' },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.post('/api/leads', values)
      const mensagem = `Olá, Tenho interesse em desenvolvimento de software. Nome: ${values.name}. Email: ${values.email}. Telefone: ${values.phone}. Ideia: ${values.ideia}`
      form.reset()
      window.location.href =
        'https://wa.me/554384778544?text=' + encodeURIComponent(mensagem)
    } catch (error) {
      console.error(error)
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="border-gray-800 bg-gradient-to-br from-gray-900 to-slate-900 text-white sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-2xl font-bold text-transparent">
            <Sparkles className="h-6 w-6 text-white" />
            Transforme sua Ideia
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Preencha os dados abaixo para darmos início ao seu projeto SaaS.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Nome Completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome"
                      {...field}
                      className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">
                    Email Profissional
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="seu@email.com"
                      {...field}
                      className="border-gray-700 bg-gray-800/50 text-white placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">WhatsApp</FormLabel>
                  <FormControl>
                    <PhoneInput
                      defaultCountry="BR"
                      placeholder="(00) 00000-0000"
                      {...field}
                      className="[&_button]:border-gray-700 [&_button]:bg-gray-800/50 [&_button]:text-white [&_input]:border-gray-700 [&_input]:bg-gray-800/50 [&_input]:text-white [&_input]:placeholder:text-gray-500"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ideia"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Sua Ideia</FormLabel>
                  <FormControl>
                    <textarea
                      className="flex min-h-[100px] w-full resize-none rounded-md border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-500"
                      placeholder="Descreva brevemente sua ideia de SaaS..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-200 via-white to-gray-200 font-bold text-black transition-opacity hover:opacity-90"
            >
              ENVIAR MINHA IDEIA
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
