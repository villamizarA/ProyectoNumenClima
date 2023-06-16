import React from 'react'
import './bienvenidos.css';
import { Link } from 'react-router-dom';

const Bienvenidos = () => {
    const handleClick = () => {
      // Lógica para manejar el clic del botón
      console.log('¡Haz clic en el botón!');
    };
  
    return (
      <div className="welcome-page">
      <div className="bienvenida">
        <h1>Bienvenidos</h1>
        <p>¡Gracias por visitarnos!</p>
        <Link to="/home">
        <button>¡Haz click aquí</button>
      </Link>
       </div>
      </div>
    );
    

  };
 

  
  export default Bienvenidos;