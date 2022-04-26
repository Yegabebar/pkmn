import React from 'react';
import './AddForm.css';
import { useState } from 'react';

export function AddForm(props){
  const [name, setName] = useState('');
  const [hp, setHp] = useState('');
  const [cp, setCp] = useState('');
  console.log('data',name, hp, cp);

  
  function save(){
    let currentList = JSON.parse(props.localStorage.pokemons);
    currentList.push({
        id: Number(currentList.slice(-1)[0].id)+1,
        name,
        hp,
        cp,
        picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png",
        types: ['Feu','Eau'],
        created: new Date(),
      });
    
    console.log('Current list', currentList);
    props.updateStorage(currentList);
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
    <button onClick={() => save()}>ADD</button>
  </div>
};
