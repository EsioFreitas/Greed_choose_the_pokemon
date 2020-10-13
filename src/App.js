import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonsJson from "./utils/pokemons.js";

const MAX_POINTS = 10;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [capturedPokemons, setCapturedPokemons] = useState([]);
  const [pokemonsPoints, setPokemonsPoints] = useState(0);

  useEffect(() => {
    setPokemons(PokemonsJson.pokemons);
    getInitialPokemons(PokemonsJson.pokemons);
  }, []);

  const searchPokemon = (pokemon) => {
    console.log(pokemon);
  };

  const getInitialPokemons = (pokemons) => {
    let tmpPoints = MAX_POINTS;
    let tmpCapturedPokemons = [];
    while (tmpPoints > 0) {
      var chosenPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

      if (tmpPoints - getPokemontPoints(chosenPokemon) < 0) {
        break;
      }
      console.log(tmpPoints);

      tmpCapturedPokemons.push(chosenPokemon);
      tmpPoints -= getPokemontPoints(chosenPokemon);
    }

    setCapturedPokemons(tmpCapturedPokemons);
    setPokemonsPoints(MAX_POINTS - tmpPoints);
    console.log(MAX_POINTS, tmpPoints, MAX_POINTS - tmpPoints);
  };

  const getPokemontPoints = (pokemon) => {
    return pokemon.spawn_chance;
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
          <p>History</p>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col mb-3">
                <div className="card">
                  <div className="card-body p-2">
                    <h6 className="card-title text-center m-0 p-0">
                      {`Pontuação da pokedex: ${pokemonsPoints.toFixed(
                        3
                      )}/${MAX_POINTS}`}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
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
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nome do pokemon"
                    aria-label="Nome do pokemon"
                    aria-describedby="button-addon2"
                    onChange={(e) => searchPokemon(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-primary"
                      type="button"
                      id="button-addon2"
                    >
                      Pesquisar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="pokemons-grid">
                  {pokemons.map((pokemon) => (
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
                      <a href="#" className="btn btn-primary">
                        Escolher
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col mt-4 d-flex justify-content-center">
            <button className="btn btn-primary w-50"  type="button">
              Avaliar possibilidade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
