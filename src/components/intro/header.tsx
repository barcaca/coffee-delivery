import { MapPinIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import coffeeLogo from '../../../public/coffee-logo.svg'
import { Cart } from './cart'

export function Header() {
  return (
    <header className="fixed z-10 mx-auto flex h-28 w-full max-w-[1120px] items-center justify-between bg-white py-8">
      <Link href={'/'}>
        <Image src={coffeeLogo} alt={'coffee logo'} width={85} height={40} />
      </Link>
      <div className="flex gap-3">
        <p className="flex items-center gap-1 rounded-md bg-purple-100 p-2">
          <MapPinIcon
            size={22}
            className="fill-purple-500 text-purple-100"
            strokeWidth={2}
          />
          Porto Alegre, RS
        </p>
        <Cart />
      </div>
    </header>
  )
}
