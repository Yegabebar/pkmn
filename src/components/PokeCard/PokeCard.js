import React from "react";
import "./PokeCard.css";
import { nanoid } from "nanoid";

export function PokeCard(props) {
  const pkmn = JSON.parse(props.pkmn);

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
              <li key={nanoid()}>{type.type.name}</li>
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
