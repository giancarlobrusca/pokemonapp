import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { PokemonLogoURL } from "./constants";

export const HomePage = ({ setPokemon }) => {
  const history = useHistory();

  function handleSearchClick() {
    setPokemon("squirtle");
    history.replace("/card");
  }

  return (
    <Home width="20px">
      <Wrapper>
        <PokemonLogo src={PokemonLogoURL} alt="Pokemon Logo" />
        <input style={{ marginBottom: "20px" }} type="search" />
        <ButtonsWrapper>
          <button onClick={handleSearchClick}>Buscar</button>
          <button>¡Azar!</button>
        </ButtonsWrapper>
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
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`;

const PokemonLogo = styled.img`
  width: 350px;
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
