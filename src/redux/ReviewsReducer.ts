import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Review } from 'components/Reviews/Reviews'

const initialState: Review[] = []

export const fetchReviews = createAsyncThunk<Review[], undefined>(
    'reviews / fetchReviews',
    async () => {
        const response = await axios.get(
            'https://639473d14df9248eada28bc8.mockapi.io/reviews'
        )
        return response.data
    }
)

export const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            return (state = action.payload)
        })
    },
})

export default reviewsSlice.reducer
