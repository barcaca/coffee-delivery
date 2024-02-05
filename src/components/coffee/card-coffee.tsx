import { cn } from '@/lib/utils'
import Image from 'next/image'
import { ComponentProps } from 'react'
import { CardCoffeeControls } from '../card-coffee-controls'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

export interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

interface CoffeeProps {
  coffee: Coffee
}

type CoffeeCardProps = ComponentProps<typeof Card> & CoffeeProps

export function CoffeeCard({ className, coffee, ...props }: CoffeeCardProps) {
  return (
    <Card
      className={cn(
        'w-64 rounded-bl-[36px] rounded-br-md rounded-tl-[6px] rounded-tr-[36px] bg-slate-50',
        className,
      )}
      {...props}
    >
      <CardHeader className="flex flex-col items-center gap-4">
        <Image
          src={coffee.image}
          alt={''}
          width={120}
          height={120}
          className="-mt-12"
        />
        <div className="flex gap-2">
          {coffee.tags.map((tag) => {
            return (
              <span
                key={tag}
                className={cn(
                  'rounded-full bg-primary/20 px-2.5 py-0.5 text-xs font-medium uppercase text-primary',
                )}
              >
                {tag}
              </span>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 text-center">
        <CardTitle className="text-xl">{coffee.title}</CardTitle>
        <CardDescription>{coffee.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <p className="flex items-center gap-1">
            R${' '}
            <span className="font-titles text-2xl">
              {coffee.price.toFixed(2)}
            </span>
          </p>
        </div>
        <CardCoffeeControls coffee={coffee} />
      </CardFooter>
    </Card>
  )
}
