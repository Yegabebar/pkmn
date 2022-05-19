/* import React from "react";
import Navigation from "../components/Navigation";
import { PokeCard } from "../components/PokeCard/PokeCard.js";
import { pokemons } from "../data/pokemons.js";
import "../App.css";

const Pokedex = () => {
  // Si pas d'objet pokemons en stockage, sauvegarder les pokemon en stockage local
  if (!localStorage.getItem("pokemons")) {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }
  // puis utiliser les pokemons stockés en local pour les composants card
  let storedPokemons = JSON.parse(localStorage.getItem("pokemons"));
  function updateStorage(currentList) {
    localStorage.setItem("pokemons", JSON.stringify(currentList));
    storedPokemons = localStorage.getItem("pokemons");
  }
  return (
    <div className="Pokedex">
      <Navigation />
      <div className="PokedexBase">
        {storedPokemons.map((pkmn) => (
          <PokeCard
            id={pkmn.id}
            name={pkmn.name}
            hp={pkmn.hp}
            cp={pkmn.cp}
            picture={pkmn.picture}
            types={pkmn.types}
            created={pkmn.created}
            key={pkmn.id}
          ></PokeCard>
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
 */