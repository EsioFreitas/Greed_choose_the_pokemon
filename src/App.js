import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonsJson from "./utils/pokemons.js";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(PokemonsJson.pokemons);
  }, []);
  
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <div className="container">
        <div className="text-center mb-5 pt-4" style={{ color: "#353535" }}>
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
              <div className="col">
                <div className="card p-2">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body m-0 p-0">
                    <h5 className="card-title text-center">Entei</h5>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card p-2">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body m-0 p-0">
                    <h5 className="card-title text-center">Entei</h5>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card p-2">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body m-0 p-0">
                    <h5 className="card-title text-center">Entei</h5>
                  </div>
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
                        <h5 className="card-title text-center">
                          {pokemon.name}
                        </h5>
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
      </div>
    </div>
  );
}

export default App;
