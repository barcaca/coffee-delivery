import { Minus, Plus } from 'lucide-react'
import { Button } from './ui/button'

interface QuantityProps {
  onDecrease: () => void
  onIncrease: () => void
  quantity: number
}

export function QuantityInput({
  onDecrease,
  onIncrease,
  quantity,
}: QuantityProps) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-slate-100 p-1">
      <Button
        variant={'secondary'}
        onClick={onDecrease}
        className="size-5 p-0 hover:bg-purple-100"
        disabled={quantity === 1}
      >
        <Minus size={16} className="text-purple-500 hover:text-purple-800" />
      </Button>
      <span>{quantity}</span>
      <Button
        variant={'secondary'}
        onClick={onIncrease}
        className="size-5 p-0 hover:bg-purple-100"
      >
        <Plus size={16} className="text-purple-500 hover:text-purple-800" />
      </Button>
    </div>
  )
}
