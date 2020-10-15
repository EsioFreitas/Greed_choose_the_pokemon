import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonsJson from "./utils/pokemonRarity";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [capturedPokemons, setCapturedPokemons] = useState([]);
  const [pokemonsPoints, setPokemonsPoints] = useState(0);
  const [exchangedPokemons, setExchangedPokemons] = useState([]);
  const [couldAnswer, setCouldAnswer] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [chosenPokemon, setChosenPokemon] = useState([]);

  useEffect(() => {
    setPokemons(PokemonsJson);
    getInitialPokemons(PokemonsJson);
  }, []);

  const searchPokemon = (pokemon) => {
    console.log(pokemon);
  };

  const getInitialPokemons = (pokemons) => {
    let tmpPoints = 0;
    let tmpCapturedPokemons = [];
    for (let i = 0; i < 9; i++) {
      var chosenPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
      tmpCapturedPokemons.push(chosenPokemon);
      tmpPoints += getPokemontPoints(chosenPokemon);
    }
    setCapturedPokemons(tmpCapturedPokemons);
    setPokemonsPoints(tmpPoints);
  };

  const getPokemontPoints = (pokemon) => {
    return pokemon.rarity;
  };

  const choosePokemon = (pokemon) => {
    const newInfo = [...chosenPokemon, pokemon];
    setChosenPokemon(newInfo);
  };

  const calculateValueToTrade = () => {
    let valueToTrade = 0;

    chosenPokemon.forEach((pokemon) => (valueToTrade += pokemon.rarity));

    return valueToTrade;
  };

  const closeModal = () => {
    setOpenModal(false);
    setTimeout(() => {
      setExchangedPokemons([]);
      setChosenPokemon([]);
    }, 500);
  };

  const evaluatePokemons = () => {
    let valueToTrade = calculateValueToTrade();
    let sortedPokemons = [...capturedPokemons];
    let couldAnswer = true;

    sortedPokemons.sort((a, b) => {
      if (a.rarity < b.rarity) return 1;
      if (a.rarity > b.rarity) return -1;
      return 0;
    });

    const result = [];

    while (valueToTrade > 0) {
      const index = sortedPokemons.findIndex(
        (pokemon) => pokemon.rarity <= valueToTrade
      );
      if (index >= 0) {
        result.push(sortedPokemons[index]);
        valueToTrade -= sortedPokemons[index].rarity;
        sortedPokemons.splice(index, 1);
      } else {
        valueToTrade = 0;
        couldAnswer = false;
        console.log(sortedPokemons);
        console.log("Não é possível fazer uma troca exata");
      }
    }
    if (couldAnswer) {
      setExchangedPokemons(result);
      console.log(result);
    }

    setOpenModal(true);
  };

  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <div className="container">
        <div className="text-center mb-4 pt-4" style={{ color: "#353535" }}>
          <h1 className="mb-3">
            Projeto{" "}
            <span className="bold-text" style={{ color: "#EF5350" }}>
              Escolha o Pokemon
            </span>
          </h1>
          <p>
            O professor carvalho está trocando pokémons, mas para a troca ser
            justa, ele está usando a raridade dos pokémons como critério.
            Escolha quais pokémons você quer e vamos te dizer qual é o menor
            número de pokémons que você precisa transferir para trocar.
          </p>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="pokemons-grid">
                  {capturedPokemons.map((pokemon) => (
                    <div className="card p-2">
                      <img
                        src={pokemon.img}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body m-0 p-0">
                        <h6 className="card-title text-center">
                          {`${pokemon.name} - ${getPokemontPoints(pokemon)}`}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row">
              <div className="col">
                <div className="pokemons-grid">
                  {pokemons.map((pokemon) => (
                    <div key={pokemon.id} className="card p-2">
                      <img
                        src={pokemon.img}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body m-0 p-0">
                        <h6 className="card-title text-center">
                          {`${pokemon.name} - ${getPokemontPoints(pokemon)}`}
                        </h6>
                      </div>
                      <button
                        onClick={() => choosePokemon(pokemon)}
                        className="btn btn-primary"
                      >
                        Escolher
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-4">
          <div className="col">
            <div
              className=" d-flex justify-content-beetwen flex-nowrep "
              style={{ overflow: "auto" }}
            >
              {chosenPokemon.map((pokemon) => (
                <div
                  key={pokemon.id}
                  className="card p-2 mr-2"
                  style={{ width: "130px", minWidth: "130px" }}
                >
                  <img src={pokemon.img} className="card-img-top" alt="..." />
                  <div className="card-body m-0 p-0">
                    <h6 className="card-title text-center">
                      {`${pokemon.name} - ${getPokemontPoints(pokemon)}`}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col   d-flex justify-content-center">
            <button
              onClick={evaluatePokemons}
              className="btn btn-primary w-50"
              type="button"
              disabled={chosenPokemon.length === 0}
            >
              Avaliar possibilidade
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal-container"
        style={{
          width: openModal ? "100vw" : "0",
          height: openModal ? "100vh" : "0",
        }}
      >
        <div
          className="custom-modal"
          style={{
            transform: openModal ? "translateY(0)" : "translateY(100rem)",
          }}
        >
          <div className="row mb-4">
            <div className="col">
              <div className="pokemons-grid-modal">
                {exchangedPokemons.map((pokemon) => (
                  <div className="card p-2">
                    <img src={pokemon.img} className="card-img-top" alt="..." />
                    <div className="card-body m-0 p-0">
                      <h6 className="card-title text-center">
                        {`${pokemon.name} - ${getPokemontPoints(pokemon)}`}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
              {exchangedPokemons.length === 0 && (
                <h3 className="text-center">
                  Não é possível fazer uma troca exata
                </h3>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <button
                className="btn btn-primary w-50"
                type="button"
                onClick={closeModal}
              >
                Fazer nova simulação
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
