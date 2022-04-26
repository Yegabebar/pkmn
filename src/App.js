import './App.css';
import { PokeCard } from './components/PokeCard/PokeCard.js';
import { pokemons } from './data/pokemons.js';

function App() {
  // Si pas d'objet pokemons en stockage, sauvegarder les pokemon en stockage local
  if(!localStorage.getItem((pokemons))){
    localStorage.setItem('pokemons', JSON.stringify(pokemons));
  }
  // puis utiliser les pokemons stockés en local pour les composants card
  const storedPokemons = JSON.parse(localStorage.getItem('pokemons'));
  return (
    <div className="App">
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
