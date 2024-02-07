import { CartItem } from '@/contexts/cart-context'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  CHANGE_CART_ITEM_QUANTITY = 'CHANGE_CART_ITEM_QUANTITY',
  CLEAN_CART = 'CLEAN_CART',
}
export type Actions =
  | {
      type: ActionTypes.ADD_TO_CART
      payload: CartItem
    }
  | {
      type: ActionTypes.REMOVE_CART_ITEM
      payload: string
    }
  | {
      type: ActionTypes.CHANGE_CART_ITEM_QUANTITY
      payload: {
        id: string
        quantity: number
      }
    }
  | {
      type: ActionTypes.CLEAN_CART
      payload: []
    }
export function addCartItemAction(cartItem: CartItem) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: cartItem,
  } satisfies Actions
}

export function removeCartItemAction(id: string) {
  return {
    type: ActionTypes.REMOVE_CART_ITEM,
    payload: id,
  } satisfies Actions
}

export function changeCartItemQuantityAction(id: string, quantity: number) {
  return {
    type: ActionTypes.CHANGE_CART_ITEM_QUANTITY,
    payload: {
      id,
      quantity,
    },
  } satisfies Actions
}

export function cleanCartAction() {
  return {
    type: ActionTypes.CLEAN_CART,
    payload: [],
  } satisfies Actions
}
