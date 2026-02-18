import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  sort: {
    name: 'цене', 
    sortProp: 'price'
  },
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCatedoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload
    },
    setSort: (state, action) => {
      state.sort = action.payload
    }
  },
})

export const selectSort = (state: any) => state.filter.sort
export const selectCartItem = (state: any, id: string) => state.cart.items.find((obj: any) => obj.id === id)

export const { setCatedoryId, setSort } = filterSlice.actions

export default filterSlice.reducer 