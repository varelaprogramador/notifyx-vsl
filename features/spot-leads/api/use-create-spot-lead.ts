import { z } from 'zod'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'

import { api } from '@/lib/api'
import { createSpotLeadSchema } from '../schemas'

export function useCreateSpotLead() {
  const mutation = useMutation({
    mutationFn: async (values: z.infer<typeof createSpotLeadSchema>) => {
      await api.post('/matra/leads/create-2', {
        ...values,
        origin: 'JEREMIAS-MATRA',
        whatsappGroup:
          'https://wa.me/554384778544?text=Ol%C3%A1%2C%20quero%20desenvolver%20meu%20sass!',
        messages: [
          'Opa! tudo bem? 😊',
          'Esse disparo só é para ter certeza que voce conseguiu entrar em contato, clique no link abaixo caso não tenha entrado:',
          'https://wa.me/554384778544?text=Ol%C3%A1%2C%20quero%20desenvolver%20meu%20sass!',
          'Obrigado!',
        ],
      })
      return
    },
    onSuccess: () => {
      toast.success(
        'Formulário enviado com sucesso! Aguarde o redirecionamento.',
        {
          id: 'create-spot-lead-success',
        },
      )
    },
    onError: error => {
      switch (error.message) {
        case 'Invalid parameters':
          toast.error(
            'Ocorreu um erro ao enviar o formulário. Tente novamente.',
            {
              id: 'create-spot-lead-error',
            },
          )
          break
        default:
          toast.error(
            'Ocorreu um erro ao enviar o formulário. Tente novamente.',
            {
              id: 'create-spot-lead-error',
            },
          )
          break
      }
    },
  })

  return mutation
}
