import React from 'react';
import './AddForm.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPkmn } from '../../data/store';

export function AddForm(props){
  const [name, setName] = useState('');
  const [hp, setHp] = useState('');
  const [cp, setCp] = useState('');

  const dispatch = useDispatch();
  const currentList = useSelector(state => state.pkmnReducer);
  
  function save(e){
    e.preventDefault();
    //console.log('New ID:',(currentList.slice(-1)[0].id)+1);
    const id = Number(currentList.slice(-1)[0].id+1);
    //let currentList = JSON.parse(props.localStorage.pokemons);
    const newPkmn = {
      id,
      name,
      hp,
      cp,
      picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png",
      types: ['Feu','Eau'],
      created: 'ONCHE'/* new Date() */,
    };
    //currentList = [...currentList, newPkmn];
    /* props.updateStorage(currentList); */
    dispatch(addPkmn(newPkmn));
    //store.pkmnReducer(currentList, {action:'ADD', payload:newPkmn});
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
