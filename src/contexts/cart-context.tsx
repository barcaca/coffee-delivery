'use client'
import { Coffee } from '@/components/coffee/card-coffee'
import { produce } from 'immer'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface CartItem extends Coffee {
  quantity: number
}

export interface DataUserForm {
  cep: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  uf: string
  paymentMethod: string
}

interface CartContextType {
  dataUser: DataUserForm[]
  cartItems: CartItem[]
  cartQuantity: number
  cartItemTotal: number
  cleanCart: () => void
  addToCart: (coffee: CartItem) => void
  addUserData: (data: DataUserForm) => void
  removeCartItem: (cartItemId: string) => void
  changeCartItemQuantity: (
    cartItemId: string,
    type: 'increase' | 'decrease',
  ) => void
}
interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEM_STORAGE_KEY = '@coffeeDelivery: cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItem] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const storedCartItems = localStorage.getItem(COFFEE_ITEM_STORAGE_KEY)
      if (storedCartItems !== null) {
        return JSON.parse(storedCartItems)
      }
    }
    return []
  })
  const [dataUser, setDataUser] = useState<DataUserForm[]>([])

  const cartQuantity = cartItems.length

  const cartItemTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addToCart(coffee: CartItem) {
    const existsInCart = cartItems.findIndex((item) => item.id === coffee.id)
    const newCart = produce(cartItems, (draft) => {
      if (existsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[existsInCart].quantity += coffee.quantity
      }
    })
    setCartItem(newCart)
    console.log(newCart)
  }
  function changeCartItemQuantity(
    cartItemId: string,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = draft.findIndex(
        (item) => item.id === cartItemId,
      )
      if (type === 'increase') {
        draft[coffeeExistsInCart].quantity++
      } else {
        draft[coffeeExistsInCart].quantity--
      }
    })
    setCartItem(newCart)
  }
  function removeCartItem(cartItemId: string) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = draft.findIndex(
        (item) => item.id === cartItemId,
      )
      draft.splice(coffeeExistsInCart, 1)
    })
    setCartItem(newCart)
  }
  function cleanCart() {
    localStorage.removeItem(COFFEE_ITEM_STORAGE_KEY)
    setCartItem([])
  }
  function addUserData(data: DataUserForm) {
    setDataUser([...dataUser, data])
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEM_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        dataUser,
        cartItems,
        cartQuantity,
        cartItemTotal,
        addToCart,
        addUserData,
        cleanCart,
        removeCartItem,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  return context
}
