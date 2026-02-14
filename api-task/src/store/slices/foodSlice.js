import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch meals from TheMealDB API
export const fetchMeals = createAsyncThunk(
    'food/fetchMeals',
    async () => {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
        const data = await response.json();
        return data.meals;
    }
);

const foodSlice = createSlice({
    name: 'food',
    initialState: {
        meals: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeals.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMeals.fulfilled, (state, action) => {
                state.loading = false;
                state.meals = action.payload;
            })
            .addCase(fetchMeals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default foodSlice.reducer;