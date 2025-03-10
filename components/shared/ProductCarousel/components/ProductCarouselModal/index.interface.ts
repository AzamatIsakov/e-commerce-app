import { Dispatch, SetStateAction } from 'react'

export interface ProductCarouselModalProps {
  open: boolean
  updateModalOpen: Dispatch<SetStateAction<boolean>>
  images: string[]
  onCarouselSelect: (index: number) => void
  selected: number
}
