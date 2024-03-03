import logo from "./logo.png";
import "./App.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  Image,
} from "react-bootstrap/";
import RecipeCard from "./Components/RecipeCard.js";
import recipes from "./recipes.js";
import { useEffect, useState } from "react";
import Encabezado from "./Components/Encabezado.js";
import Buscador from "./Components/Buscador.js";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const [nombre, setNombre] = useState("Nombre");

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  // nombre y sprite list
  // por sacar: numero, tipo, 


  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
          console.log(data);
      });
  }, []);


  useEffect(() => {
    pokemonList.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((data) => {
          const spriteURL = data.sprites.front_default;
          const types = data.types.map((typeData) => typeData.type.name);
          setPokemonList((prevPokemonList) =>
            prevPokemonList.map((prevPokemon) =>
              prevPokemon.url === pokemon.url
                ? { ...prevPokemon, spriteURL: spriteURL, types: types }
                : prevPokemon
            )
          );
        });
    });
  }, [pokemonList]);


  return (
    <div className="App">
      <Container>
        <Row>
          {pokemonList.map((pokemon, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <RecipeCard title={pokemon.name} spriteURL={pokemon.spriteURL} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
