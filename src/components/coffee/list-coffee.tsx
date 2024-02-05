import { coffeesData } from '@/data/data'
import { CoffeeCard } from './card-coffee'

export function ListCoffee() {
  const coffees = coffeesData
  return (
    <section>
      <h2 className="mb-14 text-4xl">Nossos Cafés</h2>
      <div className="grid grid-cols-4 gap-x-8 gap-y-10">
        {coffees.map((item) => {
          return <CoffeeCard key={item.id} coffee={item} />
        })}
      </div>
    </section>
  )
}
