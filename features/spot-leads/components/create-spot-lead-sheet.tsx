'use client'

import { z } from 'zod'
import { nanoid } from 'nanoid'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { facebookPixelEvent } from '@/lib/utils'
import { PhoneInput } from '@/components/phone-input'
import { useCreateSpotLead } from '../api/use-create-spot-lead'
import { sendFacebookTracking } from '@/features/utils/actions'
import { useOpenCreateSpotLeadSheet } from '../hooks/use-open-create-spot-lead-sheet'

import {
  createSpotLeadSchema,
  defaultSpotLeadValues,
} from '@/features/spot-leads/schemas'

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from '@/components/ui/dialog'

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'

export const CreateSpotLeadSheet = () => {
  const router = useRouter()
  const { isOpen, onClose } = useOpenCreateSpotLeadSheet()

  const { mutate, isPending } = useCreateSpotLead()

  const form = useForm<z.infer<typeof createSpotLeadSchema>>({
    disabled: isPending,
    defaultValues: defaultSpotLeadValues,
    resolver: zodResolver(createSpotLeadSchema),
  })

  const handleClose = () => {
    onClose()
    form.reset()
  }

  const onSubmit = form.handleSubmit(
    (values: z.infer<typeof createSpotLeadSchema>) => {
      if (isPending) return

      const eventId = nanoid()

      const phone = values.phone.replace(/\D/g, '')?.trim()

      mutate(values, {
        onSuccess: () => {
          facebookPixelEvent({
            eventId,
            eventName: 'Lead',
            trackType: 'track',

            extraData: {
              ph: phone,
            },
          })

          sendFacebookTracking({
            eventId,
            eventName: 'Lead',
            phone: values.phone,

          })

          router.push('/redirect')
          form.reset()
        },
      })
    },
  )

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-full max-w-[90%] rounded-md sm:max-w-md border-2 border-[#0066FF]">
        <DialogHeader className="bg-[#0066FF] text-white rounded-t-md p-4 -m-4 mb-4">
          <DialogTitle>
            <div className="bg-white p-4 rounded-2xl">
              <h1 className="text-4xl font-bold text-[#0066FF] text-center">VOUZ</h1>
              <p className="text-lg font-bold text-[#0066FF] text-center">CRM imobiliário</p>
            </div>
          </DialogTitle>

          <DialogDescription className="text-center text-white mt-4">
            Preencha o formulário e entre no nosso Grupo VIP do WhatsApp para corretores e imobiliárias.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4" onSubmit={onSubmit}>
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#0066FF] font-semibold">WhatsApp</FormLabel>

                  <FormControl>
                    <PhoneInput
                      {...field}
                      defaultCountry="BR"
                      placeholder="(00) 00000-0000"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full gap-2 uppercase bg-[#0066FF] hover:bg-[#0052CC] text-white" disabled={isPending}>
              Quero conhecer o VOUZ CRM
              {isPending && <Loader2 className="size-4 animate-spin" />}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Seus dados estão seguros e não serão compartilhados com terceiros.
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
