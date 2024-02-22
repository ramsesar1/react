import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [aceptoTerminos, setAceptoTerminos] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Iniciando sesión...");
  };

  return (
    <div className="App">
      <h1>Recetas de cocina</h1>
      <div className="search-bar">
        <input type="text" placeholder="Nombre de la receta" />
        <button>Buscar</button>
      </div>
      <div className="recipe-container">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="recipe-item">
            <div className="recipe-image-placeholder"></div>
            <p className="recipe-text-placeholder">Descripción de la receta</p>
            <button>Ver</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
