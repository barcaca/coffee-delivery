'use client'
import { useCart } from '@/contexts/cart-context'
import { ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { Coffee } from './coffee/card-coffee'
import { QuantityInput } from './quantity-input'
import { Button } from './ui/button'

interface CardCoffeeControls {
  coffee: Coffee
}
export function CardCoffeeControls({ coffee }: CardCoffeeControls) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  function handleIncrease() {
    setQuantity((prev) => prev + 1)
  }
  function handleDecrease() {
    setQuantity((prev) => prev - 1)
  }
  function handleAddCoffeeToCart() {
    const coffeeToAdd = { ...coffee, quantity }
    addToCart(coffeeToAdd)
    setQuantity(1)
  }
  return (
    <>
      <QuantityInput
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
        quantity={quantity}
      />
      <Button
        className="peer bg-purple-800 p-2 hover:bg-purple-950"
        onClick={handleAddCoffeeToCart}
      >
        <ShoppingCart
          fill="bold"
          className="fill-white text-white peer-hover:bg-purple-600"
          size={22}
        />
      </Button>
    </>
  )
}
