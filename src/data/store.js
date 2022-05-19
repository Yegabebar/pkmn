// file: visibility/visibilityReducer.ts noEmit
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { pokemons } from './pokemons';

const initialState = pokemons;
export const addPkmn = createAction('addPkmn');
export const remPkmn = createAction('remPkmn');
export const editPkmn = createAction('editPkmn');

const pkmnReducer = createReducer(initialState, (builder) => {
    builder.addCase(addPkmn, (state, action) =>
        [...state, action.payload]
    )
    .addCase(remPkmn, (state, action) => {
        state = state.filter(pkmn => pkmn.id !== action.payload.id);
    })
    .addCase(editPkmn, (state, action) => {
        return state.map(pkmn => {
            return pkmn.id === action.payload.id
            ? action.payload
            : pkmn
        })
    })
})

const store = configureStore({ reducer: {pkmnReducer}, middleware: (getDefaultMiddleware) => getDefaultMiddleware() });

export default store;