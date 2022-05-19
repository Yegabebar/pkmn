import React from 'react';
import './AddForm.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPkmn } from '../../data/actions/pkmnActions';

export function AddForm(){
  const [name, setName] = useState('');
  const [hp, setHp] = useState('');
  const [cp, setCp] = useState('');

  const dispatch = useDispatch();
  const currentList = useSelector(state => state.pkmnReducer.pokemons);
  
  function save(e){
    e.preventDefault();
    const id = Number(currentList.slice(-1)[0].id+1);
    const newPkmn = {
      id,
      name,
      hp,
      cp,
      picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png",
      types: ['Feu','Eau'],
      created: new Date(),
    };
    dispatch(addPkmn(newPkmn));
  }

  return <div className="AddForm">
    <input 
      type={"text"}
      placeholder='Name'
      onChange={(e) => setName(e.target.value)}
    />
    <input 
      type={"text"} 
      placeholder='HP'
      onChange={(e) => setHp(e.target.value)}
    />
    <input 
      type={"text"} 
      placeholder='CP'
      onChange={(e) => setCp(e.target.value)}
    />
    <button onClick={save}>ADD</button>
  </div>
};
