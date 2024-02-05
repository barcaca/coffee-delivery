import { Header } from '@/components/intro/header'
import { CartContextProvider } from '@/contexts/cart-context'
import { ReactNode } from 'react'

interface HomeLayoutProps {
  children: ReactNode
}
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <CartContextProvider>
      <Header />
      {children}
    </CartContextProvider>
  )
}
