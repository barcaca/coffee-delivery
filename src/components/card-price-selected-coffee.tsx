'use client'
import { useCart } from '@/contexts/cart-context'
import { Button } from './ui/button'

const DELIVERY_TAX = 3.5

export function PriceSelectCoffee() {
  const { cartQuantity, cartItemTotal } = useCart()
  const totalPrice = cartItemTotal + DELIVERY_TAX
  return (
    <div className="mt-6 flex flex-col gap-3">
      <div className="flex justify-between">
        <p>Total de itens</p>
        <p>R$ {cartItemTotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between">
        <p>Entrega</p>
        <p>R$ {DELIVERY_TAX.toFixed(2)}</p>
      </div>
      <div className="flex justify-between text-xl font-bold">
        <p>Total</p>
        <p>R$ {totalPrice.toFixed(2)}</p>
      </div>
      <Button
        disabled={cartQuantity <= 0}
        type="submit"
        className="uppercase text-white"
        form="completeFormOrder"
      >
        Confirmar o pedido
      </Button>
    </div>
  )
}
