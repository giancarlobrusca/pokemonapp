import React from "react";

export const PokeCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = React.useState();

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) =>
      response.json().then((data) => setPokemonData(data))
    );
  }, []);

  return (
    <>
      {pokemonData && (
        <img src={pokemonData.sprites.front_default} alt="Imagen del Pokemon" />
      )}
    </>
  );
};
