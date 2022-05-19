import React from "react";
import "./AddForm.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPkmn } from "../../data/actions/pkmnActions";

export function AddForm() {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [cp, setCp] = useState("");
  const [types, setTypes] = useState("");
  const [picture, setPicture] = useState("");
  console.log("data", name, hp, cp, types);

  const dispatch = useDispatch();
  const currentList = useSelector((state) => state.pkmnReducer.pokemons);

  //on check la valeur de types
  //si la valeur est null, on créer une liste vide
  //puis on lie les sorties de la fonction setTypes avec la liste

  function handleTypes(type) {
    if (!Array.isArray(types)) {
      console.log("init", types);
      if (type !== "selectionner un type") {
        setTypes([type]);
      }
    } else {
      console.log("Types is an array", types);
      if (type !== "selectionner un type") {
        console.log("Will add to state", type);
        setTypes([...types, type]);
      }
    }
  }

  function save(e) {
    //e.preventDefault();
    const id = Number(currentList.slice(-1)[0].id + 1);
    const newPkmn = {
      id,
      name,
      hp,
      cp,
      picture,
      types,
      created: new Date(),
    };

    if (Array.isArray(types)) {
      if (types.length >= 1) {
        if (types.length > 1) {
          if (types[0] !== types[1]) {
            dispatch(addPkmn(newPkmn));
          }
        } else {
          dispatch(addPkmn(newPkmn));
        }
      }
    }
  }

  return (
    <div className="AddForm">
      <h1>Formulaire d'ajout</h1>
      <input
        type={"text"}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="HP"
        onChange={(e) => setHp(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="CP"
        onChange={(e) => setCp(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="Image"
        onChange={(e) => setPicture(e.target.value)}
      />
      <form name="formulaire">
        <select name="types" onChange={(e) => handleTypes(e.target.value)}>
          <option>selectionner un type</option>
          <option>Feu</option>
          <option>Eau</option>
          <option>Poison</option>
          <option>Electrik</option>
        </select>
        <select name="types" onChange={(e) => handleTypes(e.target.value)}>
          <option>selectionner un type</option>
          <option>Feu</option>
          <option>Eau</option>
          <option>Poison</option>
          <option>Electrik</option>
        </select>
      </form>
      <button onClick={() => save()}>ADD</button>
    </div>
  );
}
