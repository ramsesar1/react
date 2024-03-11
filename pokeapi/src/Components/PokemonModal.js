import {Modal, Button} from "react-bootstrap";

function PokemonModal({pokemonDetails, onHide}) {
  return(
    <Modal show={true} onHide>
      <Modal.Header closeButton>
        <Modal.Title>{pokemonDetails.name} </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Base Experience: {pokemonDetails.base_experience}</p>
        <p>Height: {pokemonDetails.height}</p>
        <p>Weight: {pokemonDetails.weight}</p>
        <p>Abilities</p>
        <ul>
        {pokemonDetails.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))} 
        </ul>
        <p>Stats: </p>
        <ul>
          {pokemonDetails.stats.map((stat, index) => (
            <li key={index}>
              {stat.stat.name}:{stat.base_stat}
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PokemonModal;
