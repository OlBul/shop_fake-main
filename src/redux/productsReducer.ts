import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "components/Products/productsArray";

const initialState:Product[] =[]

export const fetchProducts = createAsyncThunk<Product[], undefined>('products/fetchProducts',
async () => {
  const response = await axios.get('https://639473d14df9248eada28bc8.mockapi.io/phones-colection')
  return response.data
}
)

export const productsSlice = createSlice({
  name:'products',
  initialState,
  reducers:{},
  extraReducers(builder){
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return state= action.payload
    })
  }
})

export default productsSlice.reducer 