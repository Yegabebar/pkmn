import React from "react";
import { AddForm } from "../components/AddForm/AddForm.js";
import Navigation from "../components/Navigation";

const Modif = () => {
  let storedPokemons = JSON.parse(localStorage.getItem("pokemons"));
  function updateStorage(currentList) {
    localStorage.setItem("pokemons", JSON.stringify(currentList));
    storedPokemons = localStorage.getItem("pokemons");
  }
  return (
    <div className="modif">
      <Navigation />
      <AddForm
        localStorage={localStorage}
        updateStorage={updateStorage}
      ></AddForm>
    </div>
  );
};

export default Modif;
