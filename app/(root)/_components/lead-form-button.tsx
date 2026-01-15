'use client'

import { useModalCaptacao } from '@/hooks/use-modal-captacao'

interface LeadFormButtonProps {
  title: string
}

export const LeadFormButton: React.FC<LeadFormButtonProps> = ({ title }) => {
  const { onOpen } = useModalCaptacao()

  return (
    <button
      title={title}
      onClick={onOpen}
      id="lead-form-button"
      className="block max-w-fit rounded-md bg-gradient-to-r from-[#2ec72e] to-[#018501] px-6 py-3 font-semibold uppercase text-white shadow-lg hover:opacity-85 hover:shadow-xl md:rounded-xl md:px-14 md:py-4 md:text-xl anime animate-pulse hover:animate-none"
    >
      {title}
    </button>
  )
}
