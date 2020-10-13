import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonsJson from "./utils/pokemonRarity";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [capturedPokemons, setCapturedPokemons] = useState([]);
  const [pokemonsPoints, setPokemonsPoints] = useState(0);

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
    for (let i = 0; i < 6; i++) {
      var chosenPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
      tmpCapturedPokemons.push(chosenPokemon);
      tmpPoints += getPokemontPoints(chosenPokemon);
    }
    setCapturedPokemons(tmpCapturedPokemons);
    setPokemonsPoints(tmpPoints);
  };

  const getPokemontPoints = (pokemon) => {
    return parseInt(pokemon.rarity);
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
                      {`Pontuação da pokedex: ${pokemonsPoints}`}
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
                      <button onClick={() => console.log(pokemon.name)} className="btn btn-primary">
                        Escolher
                      </button>
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
