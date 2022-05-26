import { createReducer } from '@reduxjs/toolkit';
import { addPkmn, remPkmn, editPkmn } from '../actions/pkmnActions';

// remplacer par un call de fonction du fichier store.js
//const initialState = { pokemons };
//const initialState = fetchPokemons();

export const pkmnReducer = createReducer({}, (builder) => {
    builder.addCase(addPkmn, (state, action) => {
        console.log('state',state);
        const updatedState = [...state.pokemons, action.payload];
        updateStateAndLocStor(state, updatedState);
    })
    .addCase(remPkmn, (state, action) => {
        const updatedState = state.pokemons.filter(pkmn => pkmn.id !== action.payload.id);
        updateStateAndLocStor(state, updatedState);
    })
    .addCase(editPkmn, (state, action) => {
        const updatedState = state.pokemons.map(pkmn => {
            return pkmn.id === action.payload.id
            ? action.payload
            : pkmn
        })
        updateStateAndLocStor(state, updatedState);
    })
})

const updateStateAndLocStor = (state, updatedState) => {
    localStorage.setItem('pokemons', JSON.stringify(updatedState));
    state.pokemons = updatedState
}