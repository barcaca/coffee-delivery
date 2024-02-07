import { CartItem } from '@/contexts/cart-context'
import { produce } from 'immer'
import { ActionTypes, Actions } from './actions'

export function cartReducer(state: CartItem[], action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return produce(state, (draft) => {
        const coffeeExistsInCart = draft.find(
          (item) => item.id === action.payload.id,
        )
        if (coffeeExistsInCart) {
          coffeeExistsInCart.quantity += action.payload.quantity
        } else {
          draft.push(action.payload)
        }
      })
    case ActionTypes.REMOVE_CART_ITEM:
      return produce(state, (draft) => {
        const coffeeExistsInCart = draft.findIndex(
          (item) => item.id === action.payload,
        )
        draft.splice(coffeeExistsInCart, 1)
      })
    case ActionTypes.CHANGE_CART_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const coffeeExistsInCart = draft.findIndex(
          (item) => item.id === action.payload.id,
        )
        draft[coffeeExistsInCart].quantity += action.payload.quantity
      })
    case ActionTypes.CLEAN_CART:
      return []
    default:
      return state
  }
}
