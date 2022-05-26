// file: visibility/visibilityReducer.ts noEmit
import { configureStore } from '@reduxjs/toolkit';
import { PkmnReducer } from '../pokemonSlice';

const store = configureStore({ 
    reducer: {PkmnReducer}, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware() 
});

export default store;