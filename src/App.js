import './App.css';
import { PokeCard } from './components/PokeCard/PokeCard.js';
import { pokemons } from './data/pokemons.js'
function App() {
  return (
    <div className="App">
      {pokemons.map(pkmn => <PokeCard
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
