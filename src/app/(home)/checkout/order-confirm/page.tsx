'use client'
import { DeliveryInfo } from '@/components/delivery-info'
import { useCart } from '@/contexts/cart-context'
import Image from 'next/image'
import imageDelivery from '../../../../../public/coffee-deliver-image.svg'

export default function OrderConfirm() {
  const { dataUser } = useCart()

  return (
    <div className="mt-52 grid w-full max-w-[1120px] grid-cols-2 gap-28">
      <div className="flex flex-col gap-10">
        <div className="">
          <h1 className="text-4xl text-primary">Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        {dataUser.slice(-1).map((data, i) => {
          return <DeliveryInfo key={i} data={data} />
        })}
      </div>
      <Image src={imageDelivery} alt={''} width={492} height={293} />
    </div>
  )
}
