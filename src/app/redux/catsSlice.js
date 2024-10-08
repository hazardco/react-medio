import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const apiKey = import.meta.env.VITE_CAT_API_KEY;


export const fetchCats = createAsyncThunk('cats/fetchCats', () => {
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=${apiKey}`)
        .then(response => response.json())
})

const initialState = {
    cats: [],
    loading: false,
    error: false
}

const catsSlice = createSlice({
    name: 'catsSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCats.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchCats.fulfilled, (state, action) => {
                state.loading = false
                state.cats = action.payload
            })
            .addCase(fetchCats.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    },
})

export default catsSlice.reducer