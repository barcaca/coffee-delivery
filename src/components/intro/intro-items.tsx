import { Coffee, Package, ShoppingCart, Timer } from 'lucide-react'
import { IconInfo } from '../icon-info'

const dataItems = {
  shoppingCart: {
    icon: ShoppingCart,
    description: 'Compra simples e segura',
    bgIcon: 'bg-yellow-500',
  },
  package: {
    icon: Package,
    description: 'Embalagem mantém o café intacto',
    bgIcon: 'bg-amber-950',
  },
  timer: {
    icon: Timer,
    description: 'Entrega rápida e rastreada',
    bgIcon: 'bg-orange-500',
  },
  coffee: {
    icon: Coffee,
    description: 'O café chega fresquinho até você',
    bgIcon: 'bg-purple-500',
  },
}

export function IntroItems() {
  return (
    <div className="grid w-max grid-cols-[max-content_max-content] gap-x-10 gap-y-5">
      {Object.values(dataItems).map((item, i) => {
        return (
          <IconInfo
            key={i}
            textInfo={item.description}
            icon={item.icon}
            className={item.bgIcon}
          />
        )
      })}
    </div>
  )
}
