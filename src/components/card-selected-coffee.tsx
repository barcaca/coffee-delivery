'use client'
import { useCart } from '@/contexts/cart-context'
import { CardCoffeeCart } from './card-coffee-card'

export function CardSelectedCoffee() {
  const { cartItems } = useCart()
  return (
    <>
      {cartItems.map((item) => {
        return <CardCoffeeCart key={item.id} coffee={item} />
      })}
    </>
  )
}
