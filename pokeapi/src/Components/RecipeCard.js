import { Button, Card } from "react-bootstrap";
import defaultImage from "../default.png";

function RecipeCard({title, brief, spriteURL}) {

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img 
        src = {spriteURL ? spriteURL : defaultImage} 
        />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {brief}
        </Card.Text>
    
      </Card.Body>
    </Card>
  );

  

}

export default RecipeCard;
