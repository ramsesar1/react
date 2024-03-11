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

  const [nombre, setNombre] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0";

  // nombre y sprite list
  // por sacar: numero, tipo, 

//fetch para tomar la lista de pokemons
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
        const nombresPokemon = data.results.map((pokemon) => pokemon.name);
        setNombre(nombresPokemon);
          console.log(data);
      });
  }, []);



  //fetch para obtener el n umero, sprite y tipo de pokemon

  useEffect(() => {
    const fetchPokemonData = async () => {
      const updatedPokemonList = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          const spriteURL = data.sprites.front_default;
          const types = data.types.map((typeData) => typeData.type.name);
          const pokemonNumber = extraePokemonNumber(data);
          return {
            ...pokemon,
            spriteURL: spriteURL,
            types: types,
            numero: pokemonNumber,
          };
        })
      );
      setPokemonList(updatedPokemonList);
    };

    fetchPokemonData();
  }, [pokemonList]);

  
  //extrae el numero de la url del pokemon

  const extraePokemonNumber = (data) => {
    const urlPartes = data.species.url.split("/");
    return urlPartes[urlPartes.length - 2];
  }



const handleSearchChange = (searchTerm) => {
  setSearchTerm(searchTerm);
}  

const handleSearch = () => {
  handleSearchChange(searchTerm);
}

const filteredPokemon = pokemonList.filter((pokemon) =>
   pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
<div classname="App">
  <Encabezado/>
  <Container>
    <Row>
      <Col xs={12}>
        {/* pasa la funcion handleSearchChange en lugar de la funcion de onSearchChange */ }
          <Buscador onSearchChange={handleSearchChange} onSearch={handleSearch} /> 
          </Col>
        </Row>
        <Row>
          {filteredPokemon.map((pokemon, index) => (
            <Col key ={index} xs={12} sm={6} md={4} lg={3}>
              <RecipeCard
              title={pokemon.name}
              spriteURL={pokemon.spriteURL}
              types={pokemon.types}
              numero={pokemon.numero}
              pokemonUrl={pokemon.url} // Agrega esta línea para pasar la URL del Pokémon

              />
              </Col>
          ))}
          </Row>
   </Container>
</div>
);


}
export default App;
