import './App.css';
import { PokeCard } from './components/PokeCard/PokeCard.js';
import { AddForm } from './components/AddForm/AddForm.js';
import { useSelector } from 'react-redux';

function App() {
  const storedPokemons = useSelector(state => state.pkmnReducer.pokemons);

  return (
    <div className="App">
      <AddForm>
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
