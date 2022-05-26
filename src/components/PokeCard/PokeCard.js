import React from "react";
import "./PokeCard.css";

export function PokeCard(props) {
  const pkmn = props.pkmn;
  console.log('component got',pkmn)
  return (
    <div className="PokeCard">
      <div className="desc">
        <div>ID: {pkmn.id}</div>
        <div>Name: {pkmn.name}</div>
        <div>HP: {pkmn.stats[0].base_stat}</div>
        <div>ATK: {pkmn.stats[1].base_stat}</div>
        <div>DEF: {pkmn.stats[2].base_stat}</div>
        <div>
          Types:
          <ul>
            {pkmn.types.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <img src={pkmn.sprites.front_default} alt={pkmn.name + 'picture'} />
      </div>
    </div>
  );
}
