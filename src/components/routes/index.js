import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Pokedex from "../../Pages/Pokedex";
import Modif from "../../Pages/Modif";

const index = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Pokedex} />
          <Route path="/Edit" exact component={Modif} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default index;
