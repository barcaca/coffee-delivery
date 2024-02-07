'use client'
import { CartItem, useCart } from '@/contexts/cart-context'
import { Trash2 } from 'lucide-react'
import Image from 'next/image'
import { QuantityInput } from './quantity-input'
import { Button } from './ui/button'

interface CardCoffeeCart {
  coffee: CartItem
}
export function CardCoffeeCart({ coffee }: CardCoffeeCart) {
  const { removeCartItem, changeCartItemQuantity } = useCart()

  const totalCoffee = coffee.price * coffee.quantity

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 1)
  }
  function handleDecrease() {
    changeCartItemQuantity(coffee.id, -1)
  }
  function handleRemove() {
    removeCartItem(coffee.id)
  }
  return (
    <div className="flex gap-5 border-b-2 pb-6">
      <Image src={coffee.image} alt={''} width={64} height={64} />
      <div className="flex-1">
        <p>{coffee.title}</p>
        <div className="flex gap-2">
          <QuantityInput
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
            quantity={coffee.quantity}
          />
          <Button
            className="flex gap-2 border uppercase"
            variant={'secondary'}
            onClick={handleRemove}
          >
            <Trash2 size={16} className="text-purple-500" />
            Remover
          </Button>
        </div>
      </div>
      <p className="font-bold">R$ {totalCoffee.toFixed(2)}</p>
    </div>
  )
}
