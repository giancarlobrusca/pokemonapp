import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PokeCard, HomePage } from "../pages";

export const Router = () => {
  const [pokemon, setPokemon] = React.useState("");
  const [favorites, setFavorite] = React.useState([]);

  function handleSetPokemon(pokemon) {
    setPokemon(pokemon);
  }

  function handleAddFavorite(pokemon) {
    setFavorite((oldFavorites) => [...oldFavorites, pokemon]);
  }

  function deleteFavorite(pokemonName) {
    setFavorite(favorites.filter((favorite) => favorite.name !== pokemonName));
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/card">
          <PokeCard
            pokemon={pokemon}
            addFavorite={handleAddFavorite}
            favorites={favorites}
            deleteFav={deleteFavorite}
          />
        </Route>

        <Route path="/">
          <HomePage favorites={favorites} setPokemon={handleSetPokemon} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
