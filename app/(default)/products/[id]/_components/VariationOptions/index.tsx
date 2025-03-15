import { CircleCheck } from 'lucide-react'
import { VariationOptionsProps } from './index.interface'

export const VariationOptions = ({
  selected,
  variations
}: VariationOptionsProps) =>
  variations[selected].options.map((option, i) => (
    <div key={i} className="flex items-start gap-2">
      <CircleCheck fill="#22c55e" color="white" className="shrink-0" />
      <div>
        <span className="font-medium">{option.name}: </span>
        <span className="text-gray-600">{option.value}</span>
      </div>
    </div>
  ))
