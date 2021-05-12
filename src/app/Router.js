import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PokeCard, HomePage } from "../pages";

export const Router = () => {
  const [pokemon, setPokemon] = React.useState("");
  const [favorites, setFavorite] = React.useState([{}]);

  function handleSetPokemon(pokemon) {
    setPokemon(pokemon);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/card">
          <PokeCard pokemon={pokemon} />
        </Route>

        <Route path="/">
          <HomePage setPokemon={handleSetPokemon} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
