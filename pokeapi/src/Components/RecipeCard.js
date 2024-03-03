import { Button, Card } from "react-bootstrap";
import defaultImage from "../default.png";

function RecipeCard({title, brief, spriteURL, types}) {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img 
        src = {spriteURL ? spriteURL : defaultImage} 
        />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <strong>Tipos:</strong>{" "}
          {types && types.map((type, index) => (
            <span key = {index}>{type}{index !== types.length - 1 ? ', ' : ''}</span>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );

  

}

export default RecipeCard;
