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
        origin: 'MATRA CRM',
        whatsappGroup: 'https://chat.whatsapp.com/FNEgSec1YNrCbCl97sBaKv',
        messages: [
          'Opa! tudo bem? 😊',
          'Esse disparo já é pelo MATRA CRM, para garantir que voce está no grupo, clique no link abaixo:',
          'https://chat.whatsapp.com/FNEgSec1YNrCbCl97sBaKv',
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
