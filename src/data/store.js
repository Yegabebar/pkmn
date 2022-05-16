// file: visibility/visibilityReducer.ts noEmit
import { configureStore } from '@reduxjs/toolkit'
import { pokemons } from './pokemons';

const initialState = pokemons;

// Action est sous la forme: {type:'ADD', payload: {données}}
function pkmnReducer(state = initialState, action){
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'EDIT':
            return [...state, {}]; //Ecrire du code pour éditer le pkmn d'après son ID
        case 'REMOVE':
            return [...state, {}]; //Supprimer l'entrée d'après son id
        default:
            return state;
    }
}

const store = configureStore({ reducer: {pkmnReducer} });

export default store;