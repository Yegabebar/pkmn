// file: visibility/visibilityReducer.ts noEmit
import { configureStore } from '@reduxjs/toolkit';
import { pkmnReducer } from '../reducers/pkmnReducer';

const store = configureStore({ 
    reducer: {pkmnReducer}, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware() 
});

export default store;