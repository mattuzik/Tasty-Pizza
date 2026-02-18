import { createSlice } from '@reduxjs/toolkit'
import getCartItems from '../../utils/getCartItems'
import calcTotal from '../../utils/calcTotal'

export type CartItem = {
  id: string,
  title: string,
  price: number,
  imageUrl: string,
  type: string,
  size: number,
  count: number
}

interface CartSliceState {
  totalPrice: number,
  items: CartItem[]
}

const cartData = getCartItems()

const initialState : CartSliceState = {
  totalPrice: cartData.totalPrice,
  items: cartData.items,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {  
    addItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id) 

      if(findItem) {
        findItem.count++
      } else {
        state.items.push({...action.payload, count: 1})  
      }

      state.totalPrice = calcTotal(state.items)
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload)

      state.totalPrice = calcTotal(state.items)
    },

    clearItems: (state, action) => {
      state.items = []
      state.totalPrice = 0
    },

    minusItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload) 
      if(findItem) {
        if (findItem.count > 1) {
          findItem.count--
        }
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum
      }, 0)
    },
  },
})

export const selectCart = (state : any) => state.cart

export const { addItem, removeItem, clearItems, minusItem} = cartSlice.actions

export default cartSlice.reducer