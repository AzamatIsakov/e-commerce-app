import { Variation } from '@/types/product'

export interface SelectVariationsProps {
  onSelect: (index: number) => void
  selected: number
  variations: Variation[]
}
