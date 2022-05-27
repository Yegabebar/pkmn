import axios from 'axios';
import { createSlice/* , createAsyncThunk */ } from "@reduxjs/toolkit";

export let initialized = false;
export const initialState = { pokemons: [] };
const pkmnApi = axios.create()

export const getPokemonList = async (dispatch, start = 1, end = 10) => {
  if(initialized === false){
    for(let i = start; i <= end; i ++){
      const newPkmn = (await getPokemonData(i)).data;
      dispatch(addPkmn(newPkmn));
    }
    initialized = true;
  }
}

export const getPokemonData = async (id) => {
    return await pkmnApi.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //.then((response) => response.data);
  }

const PokemonSlice = createSlice({
  name: 'pokemons',
  initialState: initialState,
  reducers: {
    addPkmn(state, {payload}){
      console.log('got new stuff to save')
      const updatedState = [...state.pokemons, payload];
      updateStateAndLocStor(state, updatedState);
    },
    remPkmn(state, { payload }){
      const updatedState = state.pokemons.filter(pkmn => pkmn.id !== payload.id);
      updateStateAndLocStor(state, updatedState);
    },
    editPkmn(state, { payload }){
      const updatedState = state.pokemons.map(pkmn => {
        return pkmn.id === payload.id
        ? payload
        : pkmn
      })
      updateStateAndLocStor(state, updatedState);}
    },
  /* extraReducers: {
    [getPokemonData.pending]: () => {
      console.log("Pending");
    },
    [getPokemonData.fulfilled]: (state, { payload }) => {
      return { ...state, pokemon: payload}
    },
    [getPokemonData.rejected]: () => {
      console.log("Rejected!");
    },
  } */
})

const updateStateAndLocStor = (state, updatedState) => {
  localStorage.setItem('pokemons', JSON.stringify(updatedState));
  state.pokemons = updatedState
}

export const {addPkmn, remPkmn, editPkmn } = PokemonSlice.actions;
export const PkmnReducer = PokemonSlice.reducer;