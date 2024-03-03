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

//fetch para tomar la lista de pokemons
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
          console.log(data);
      });
  }, []);



  //fetch para obtener el n umero, sprite y tipo de pokemon
  useEffect(() => {
    pokemonList.forEach((pokemon) => {
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((data) => {
          const spriteURL = data.sprites.front_default;
          const types = data.types.map((typeData) => typeData.type.name);
          const pokemonNumber = extraePokemonNumber(data);
          setPokemonList((prevPokemonList) =>
            prevPokemonList.map((prevPokemon) =>
              prevPokemon.url === pokemon.url
                ? { ...prevPokemon, 
                  spriteURL: spriteURL, 
                  types: types,
                  numero: pokemonNumber,
                }
                : prevPokemon
            )
          );
        });
    });
  }, [pokemonList]);

  //extrae el numero de la url del pokemon

  const extraePokemonNumber = (data) => {
    const urlPartes = data.species.url.split("/");
    return urlPartes[urlPartes.length - 2];
  }



  return (
    <div className="App">
      <Container>
        <Row>
          {pokemonList.map((pokemon, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <RecipeCard 
               title={pokemon.name}
               spriteURL={pokemon.spriteURL}
               types={pokemon.types}
               numero={pokemon.numero}
               />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;