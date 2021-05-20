import React from "react";
import { useHistory } from "react-router";

export const PokeCard = ({ pokemon, addFavorite, favorites, deleteFav }) => {
  const [pokemonData, setPokemonData] = React.useState();
  const [status, setStatus] = React.useState("idle");

  const history = useHistory();

  React.useEffect(() => {
    setStatus("loading");
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json().then((data) => setPokemonData(data)))
      .catch((error) => setStatus("error"))
      .finally(setStatus("idle"));
  }, [pokemon]);

  const favoriteNames = favorites.map((favorite) => favorite.name);

  const isPokemonAdded =
    pokemonData && favoriteNames.includes(pokemonData.name);

  console.log(isPokemonAdded);

  if (status === "idle") {
    return (
      <>
        <button onClick={() => history.push("./")}>Volver a la Home</button>
        {pokemonData && (
          <>
            <img
              src={pokemonData.sprites.front_default}
              alt="Imagen del Pokemon"
            />
            <button
              onClick={
                isPokemonAdded
                  ? () => deleteFav(pokemonData.name)
                  : () => addFavorite(pokemonData)
              }
            >
              {isPokemonAdded ? "Borrar fav" : "Agregar fav"}
            </button>
          </>
        )}
      </>
    );
  } else if (status === "loading") {
    return "Cargando...";
  } else if (status === "error") {
    return (
      <>
        <button onClick={() => history.push("./")}>Volver a la Home</button>
        "Ese pokemon no existe"
      </>
    );
  }
};
