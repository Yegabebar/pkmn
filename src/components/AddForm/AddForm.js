import React from "react";
import "./AddForm.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPkmn } from "../../data/pokemonSlice";

export function AddForm() {
  const dispatch = useDispatch();
  const pkmnListState = useSelector((state) => state.PkmnReducer.pokemons);
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [types, setTypes] = useState("");
  const [picture, setPicture] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");

  //on check la valeur de types
  //si la valeur est null, on créer une liste vide
  //puis on lie les sorties de la fonction setTypes avec la liste

  function handleTypes(type) {
    if (!Array.isArray(types)) {
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
    // TODO: Adapt this with new pokemon data structure
    const id = Number(pkmnListState.slice(-1)[0].id + 1);
    const newPkmn = {
      id,
      name,
      "sprites":{
        "front_default":picture,
      },
      "stats":[
        {"base_stat":hp,"stat":{"name":"hp"}},
        {"base_stat":attack,"stat":{"name":"attack"}},
        {"base_stat":defense,"stat":{"name":"defense"}},
      ],
      "types":[
        {"type":{"name":types[0]}}
      ]
    };
    if(types.length>1){
      newPkmn.types.push({"type":{"name":types[1]}})
    }

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
        required="required"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="HP"
        required="required"
        onChange={(e) => setHp(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="Attack"
        onChange={(e) => setAttack(e.target.value)}
      />
      <input
        type={"text"}
        placeholder="Defense"
        onChange={(e) => setDefense(e.target.value)}
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
