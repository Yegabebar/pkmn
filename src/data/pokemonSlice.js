import axios from 'axios';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { pkmnReducer } from '../reducers/pkmnReducer';

export const getPokemonList = createAsyncThunk(
  '',
  async (start = 1, end = 10) => {
    let pokemonArray = [];
    for(let i = start; i <= end; i ++){
      pokemonArray.push(await getPokemonData(i));
    }
    console.log(pokemonArray);
    return pokemonArray;
  }
)

const getPokemonData = createAsyncThunk(
  '',
  async (id) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return res;
  }
)

const initialState = {
  pokemons: {}
};

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    pkmnReducer
  }
})