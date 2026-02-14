import { configureStore } from '@reduxjs/toolkit';
import fakestoreReducer from './slices/fakestoreSlice';
import foodReducer from './slices/foodSlice';
import movieReducer from './slices/movieSlice';
import recipeReducer from './slices/recipeSlice';

export const store = configureStore({
    reducer: {
        fakestore: fakestoreReducer,
        food: foodReducer,
        movie: movieReducer,
        recipe: recipeReducer,
    },
});