import { DataUserForm } from '@/contexts/cart-context'
import { DollarSign, MapPin, Timer } from 'lucide-react'
import { IconInfo } from './icon-info'

interface DeliveryInfoProps {
  data: DataUserForm
}
export function DeliveryInfo({ data }: DeliveryInfoProps) {
  const { paymentMethod } = data
  function paymentInfo() {
    if (paymentMethod === 'debit') return 'Cartão de Débito'
    if (paymentMethod === 'credit') return 'Cartão de Crédito'
    return 'Dinheiro'
  }
  return (
    <div className=" w-full rounded-bl-[44px] rounded-br-md rounded-tl-md rounded-tr-[44px] bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-0.5">
      <div className="flex h-full w-full flex-col gap-8 rounded-bl-[44px] rounded-br-md rounded-tl-md rounded-tr-[44px] bg-white p-6">
        <IconInfo
          icon={MapPin}
          className="bg-purple-500 fill-white"
          textInfo={`Entrega em Rua ${data.street}, ${data.number}`}
        >
          {data.district} - {data.city}, {data.uf}
        </IconInfo>
        <IconInfo
          icon={Timer}
          className="bg-yellow-500 fill-white"
          textInfo={`Previsão de entrega`}
        >
          <strong>20 min - 30 min</strong>
        </IconInfo>
        <IconInfo
          icon={DollarSign}
          className="bg-orange-500"
          textInfo={`Pagamento na entrega`}
        >
          <strong>{paymentInfo()}</strong>
        </IconInfo>
      </div>
    </div>
  )
}
