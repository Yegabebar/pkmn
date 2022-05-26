import React from "react";
import Routes from "./components/routes";
import './App.css';

const App = () => {
  //const storedPokemons = useSelector(state => state.pkmnReducer.pokemons);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}
export default App;