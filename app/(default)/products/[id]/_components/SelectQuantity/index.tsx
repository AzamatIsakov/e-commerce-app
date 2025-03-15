import { Button } from '@/components/ui/button'
import { QuantitySelectorProps } from './index.interface'
import { Minus, Plus } from 'lucide-react'

export const SelectQuantity = ({ value, setValue }: QuantitySelectorProps) => (
  <div className="flex items-center gap-2 sm:gap-3">
    <Button
      variant="outline"
      size="icon"
      onClick={() => setValue(Math.max(1, value - 1))}
      className="!rounded-button h-10 w-10"
    >
      <Minus />
    </Button>
    <span className="w-12 text-center text-lg font-medium">{value}</span>
    <Button
      variant="outline"
      size="icon"
      onClick={() => setValue(value + 1)}
      className="!rounded-button h-10 w-10"
    >
      <Plus />
    </Button>
  </div>
)
