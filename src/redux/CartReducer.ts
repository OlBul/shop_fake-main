import { createSlice } from "@reduxjs/toolkit";
import {omit} from 'lodash'

type State = {
  [id:number]:number
}

const initialState : State = {

}

export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addProductToCart:(state, action) => ({
      ...state,
      [action.payload.id]: (state[action.payload.id] || 0) + action.payload.count
    }),
    removeProductFromCart:(state, action) => omit(state,action.payload),

    changeProductQuatity:(state, action) => ({
      ...state,
      [action.payload.id]: action.payload.count
    })    
  }
})

export const {addProductToCart, removeProductFromCart, changeProductQuatity} = cartSlice.actions



export default cartSlice.reducer