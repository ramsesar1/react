// RecipeCard.js
import { Button, Card } from "react-bootstrap";
import defaultImage from "../default.png";
import { useState } from "react";
import PokemonModal from "./PokemonModal";

function RecipeCard({ title, spriteURL, types, numero, pokemonUrl }) {
  const [showModal, setShowModal] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState(null);


  //hace fetch para los detalles del pokemnon
  const fetchPokemonDetails = async () => {
    try {
      const response = await fetch(pokemonUrl);
      const data = await response.json();
      setPokemonDetails(data);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    }
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img src={spriteURL ? spriteURL : defaultImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <strong>Numero:</strong> {numero}
            <br />
            <strong>Tipos:</strong>{" "}
            {types &&
              types.map((type, index) => (
                <span key={index}>
                  {type}
                  {index !== types.length - 1 ? ", " : ""}
                </span>
              ))}
          </Card.Text>
          <Button variant="primary" onClick={fetchPokemonDetails}>
            Ver Información
          </Button>
        </Card.Body>
      </Card>
      {showModal && (
        <PokemonModal
          pokemonDetails={pokemonDetails}
          onHide={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default RecipeCard;
