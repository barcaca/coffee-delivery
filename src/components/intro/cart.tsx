'use client'
import { useCart } from '@/contexts/cart-context'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

export function Cart() {
  const { cartQuantity } = useCart()
  return (
    <Link href={'/checkout'} className="">
      <Button className="peer relative bg-yellow-100 p-2 hover:bg-yellow-200">
        {cartQuantity >= 1 && (
          <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-orange-400 text-white">
            {cartQuantity}
          </span>
        )}
        <ShoppingCart
          fill="bold"
          className="fill-primary text-primary peer-hover:bg-yellow-600"
          size={22}
        />
      </Button>
    </Link>
  )
}
