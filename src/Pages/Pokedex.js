import React from "react";
import { useEffect } from 'react';
import Navigation from "../components/Navigation";
import { PokeCard } from "../components/PokeCard/PokeCard.js";
import { getPokemonList } from "../data/pokemonSlice";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";

const Pokedex = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.PkmnReducer.pokemons);
  useEffect(() => {
    getPokemonList(dispatch);
  }, [dispatch])

  return (
    <div className="Pokedex">
      <Navigation />
      <div className="PokedexBase">
        {pokemons.map((pkmn) => (
          <PokeCard
            pkmn={pkmn}
            key={nanoid()}
          ></PokeCard>
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
