import { create } from 'zustand'

interface LoginState {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useLoginStore = create<LoginState>((set) => ({
  open: false,
  setOpen: (open) => set(() => ({ open: open }))
}))
