import React from "react";
import "./PokeCard.css";

export function PokeCard(props) {
  return (
    <div className="PokeCard">
      <div class="desc">
        <div>ID: {props.id}</div>
        <div>Name: {props.name}</div>
        <div>HP: {props.hp}</div>
        <div>CP: {props.cp}</div>
        <div>
          Types:
          <ul>
            {props.types.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <img src={props.picture} alt={props.picture} />
      </div>
    </div>
  );
}
