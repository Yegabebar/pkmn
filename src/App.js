import './App.css';
import { PokeCard } from './components/PokeCard/PokeCard.js';
import { AddForm } from './components/AddForm/AddForm.js';
//import { pokemons } from './data/pokemons.js';
import { useSelector } from 'react-redux';

function App() {
  // Si pas d'objet pokemons en stockage, sauvegarder les pokemon en stockage local
  const storedPokemons = useSelector(state => state.pkmnReducer);
  console.log('EHEH',storedPokemons.pkmnReducer);
  /* if(!localStorage.getItem('pokemons')){
    //localStorage.setItem('pokemons', JSON.stringify(pokemons));

    localStorage.setItem('pokemons', JSON.stringify(pokemons));
  } */
  // puis utiliser les pokemons stockés en local pour les composants card
  //let storedPokemons = JSON.parse(localStorage.getItem('pokemons'));
  /* function updateStorage(currentList){
    localStorage.setItem('pokemons', JSON.stringify(currentList));
    storedPokemons = localStorage.getItem('pokemons')
  } */
  return (
    <div className="App">
      <AddForm /* localStorage={localStorage} *//*  updateStorage={updateStorage} */>
      </AddForm>
      {storedPokemons.map(pkmn => <PokeCard
        id={pkmn.id}
        name={pkmn.name}
        hp={pkmn.hp}
        cp={pkmn.cp}
        picture={pkmn.picture}
        types={pkmn.types}
        created={pkmn.created}
        key={pkmn.id}
      ></PokeCard>)}
    </div>
  );
}

export default App;
