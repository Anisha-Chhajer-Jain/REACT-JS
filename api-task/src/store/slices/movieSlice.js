import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch movies from IMDB API
export const fetchMovies = createAsyncThunk(
    'movie/fetchMovies',
    async () => {
        const response = await fetch(
            'https://imdb236.p.rapidapi.com/api/imdb/cast/nm0000190/titles?rapidapi-key=b9ca06fef3mshbb4e99b721e4151p12e38fjsna272dc1d109c'
        );
        const data = await response.json();
        return data;
    }
);

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default movieSlice.reducer;