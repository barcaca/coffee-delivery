import { PriceSelectCoffee } from '@/components/card-price-selected-coffee'
import { CardSelectedCoffee } from '@/components/card-selected-coffee'
import { FormOrder } from '@/components/form/form-order'
import { Card } from '@/components/ui/card'

export default function Checkout() {
  return (
    <section className="mt-52 flex w-full max-w-[1120px] gap-8">
      <div className="flex w-full max-w-screen-sm flex-col gap-4">
        <h5 className="text-lg">Complete seu pedido</h5>
        <FormOrder />
      </div>
      <div className="flex w-full flex-col gap-4">
        <h5 className="text-lg">Cafés selecionados</h5>
        <Card className="rounded-bl-[44px] rounded-br-md rounded-tl-md rounded-tr-[44px] bg-slate-50 p-10">
          <CardSelectedCoffee />
          <PriceSelectCoffee />
        </Card>
      </div>
    </section>
  )
}
