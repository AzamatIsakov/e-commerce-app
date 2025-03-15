import { IVariation } from '@/services/Products.dto'

export interface SelectVariationsProps {
  onSelect: (index: number) => void
  selected: number
  variations: IVariation[]
}
