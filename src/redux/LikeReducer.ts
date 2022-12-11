import { createSlice } from "@reduxjs/toolkit";

type likeProductsState = {
  [id:number]:boolean 
}

const initialState : likeProductsState = {
 
}

export const likeSlice = createSlice({
  name:'Like',
  initialState,
  reducers:{
    addLike:(state, action) => ({
      ...state,
      [action.payload]:true
    }),
    removeLike:(state, action) => ({
      ...state,
      [action.payload]:false
    }),
  }
})

export const {addLike, removeLike} = likeSlice.actions

export default likeSlice.reducer