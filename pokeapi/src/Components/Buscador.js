import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";

function Buscador({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputCambio = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearchChange(searchTerm);
  };

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Buscar Pokémon"
        className="mr-sm-2"
        value={searchTerm}
        onChange={handleInputCambio}
      />
      <Button variant="outline-success" onClick={handleSearch}>
        Buscar
      </Button>
    </Form>
  );
}

export default Buscador;
