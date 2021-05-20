import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { PokemonLogoURL } from "./constants";

export const HomePage = ({ favorites, setPokemon }) => {
  const [input, setInput] = React.useState();

  const history = useHistory();

  function handleSearchClick() {
    setPokemon(input.toLowerCase());
    history.replace("/card");
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  return (
    <Home width="20px">
      <Wrapper>
        <PokemonLogo src={PokemonLogoURL} alt="Pokemon Logo" />
        <SearchBar
          placeholder="Buscá tu Pokémon"
          value={input}
          onChange={handleInputChange}
          type="search"
        />
        <ButtonsWrapper>
          <button onClick={handleSearchClick}>Buscar</button>
          <button>¡Azar!</button>
        </ButtonsWrapper>
        {favorites.map((favorite) => `${favorite.name}`)}
      </Wrapper>
    </Home>
  );
};

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://i.pinimg.com/originals/26/b5/55/26b5551ba10f013a335e91b98f530d51.png");
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const SearchBar = styled.input`
  width: 100%;
  margin-bottom: 20px;
`;

const PokemonLogo = styled.img`
  width: 350px;
  margin-bottom: 20px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  button {
    cursor: pointer;
    color: white;
    padding: 10px;
    font-weight: 600;
    background-color: red;
    border: none;
    border-radius: 6px;
    transition: all ease-out 0.3s;

    &:hover {
      filter: brightness(0.8);
      transform: translateY(-4px);
    }

    &:first-child {
      width: 70%;
    }

    &:last-child {
      width: 30%;
    }
  }
`;
