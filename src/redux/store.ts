import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './CartReducer'
import likeReducer from './LikeReducer'
import productsReducer from './productsReducer'
import reviewsReducer from './ReviewsReducer'

export const store = configureStore({
    reducer: {
        productsLikeState: likeReducer,
        productsInCart: CartReducer,
        products: productsReducer,
        reviews: reviewsReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
