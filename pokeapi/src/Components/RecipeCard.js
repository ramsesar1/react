import { Button, Card } from "react-bootstrap";
import defaultImage from "../default.png";

function RecipeCard({title, brief, spriteURL, types, numero}) {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img 
        src = {spriteURL ? spriteURL : defaultImage} 
        />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Numero:</strong> {numero}
          <br />


          <strong>Tipos:</strong>{" "}
          {types && types.map((type, index) => (
            <span key = {index}>{type}{index !== types.length - 1 ? ', ' : ''}</span>
          ))}
        </Card.Text>
        <Button variant="primary">Ver información</Button>
      </Card.Body>
    </Card>
  );

  

}

export default RecipeCard;
