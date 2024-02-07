'use client'
import { Coffee } from '@/components/coffee/card-coffee'
import {
  addCartItemAction,
  changeCartItemQuantityAction,
  cleanCartAction,
  removeCartItemAction,
} from '@/reducers/actions'
import { cartReducer } from '@/reducers/reducer'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
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
  changeCartItemQuantity: (cartItemId: string, type: 1 | -1) => void
}
interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEM_STORAGE_KEY = '@coffeeDelivery: cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, dispatch] = useReducer(cartReducer, [])
  const [dataUser, setDataUser] = useState<DataUserForm[]>([])

  const cartQuantity = cartItems.length

  const cartItemTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addToCart(coffee: CartItem) {
    dispatch(addCartItemAction(coffee))
  }
  function removeCartItem(cartItemId: string) {
    dispatch(removeCartItemAction(cartItemId))
  }
  function changeCartItemQuantity(cartItemId: string, type: 1 | -1) {
    dispatch(changeCartItemQuantityAction(cartItemId, type))
  }
  function cleanCart() {
    localStorage.removeItem(COFFEE_ITEM_STORAGE_KEY)
    dispatch(cleanCartAction())
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
