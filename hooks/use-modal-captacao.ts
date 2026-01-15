import { create } from 'zustand'

type ModalCaptacaoStore = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useModalCaptacao = create<ModalCaptacaoStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
