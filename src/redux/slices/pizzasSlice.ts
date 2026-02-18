import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const {categorySearch, sortType, isDesc} : any = params 
  const res = await axios.get(`https://6987a3978bacd1d773ede5e3.mockapi.io/items?${categorySearch}&sortBy=${sortType}&order=${isDesc}`)

  return res.data
})
 
const initialState = {
  items: [],
  status: '',
}

export const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {  
    setItems: (state, action) => {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading"
        state.items = []
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = "success"
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = "error"
        state.items = []
      })
    }
})

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer