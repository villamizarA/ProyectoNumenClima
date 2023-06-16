
import React, { useState } from 'react';
import './contacto.css';

const Contacto = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    // por ejemplo, utilizando una API o enviando un correo electrónico

    // Luego de enviar el formulario, puedes reiniciar los campos
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    
   
    <form className="contact-form" onSubmit={handleSubmit}>
    <h3 className="titulo">¿Necesitas más información sobre nuestra página?</h3>

     
      <div className="form-group">
        <label className="letra" htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="letra" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="letra" htmlFor="message">¿En que podemos ayudarte?</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
     
   
    </form>
  );
};

export default Contacto;