import { HeroSection } from '@/components/intro/hero-section'
import { ListCoffee } from '@/components/coffee/list-coffee'

export default function Home() {
  return (
    <main className="mt-52 flex w-full max-w-[1120px] flex-col">
      <HeroSection />
      <ListCoffee />
    </main>
  )
}
