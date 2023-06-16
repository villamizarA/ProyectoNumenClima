import { Component } from 'react';
import './assets/css/App.css';
import NavBar from './components/NavBar';
import Weatherapi from './components/Weatherapi';
import Home from './components/paginas/Home'
import Nosotros from './components/paginas/Nosotros';
import Contacto from './components/paginas/Contacto';
import { Route, Routes } from "react-router-dom"
import Bienvenidos from './components/paginas/Bienvenidos';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
     
      <div className="container">
    
        <Routes>
          <Route path="/" element={<Bienvenidos/>}/>
          </Routes>
          <Routes>

          <Route path="/Home" element={<Weatherapi />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
         
         
        </Routes>

      </div>
      <Footer/>
      
    </>
  )
}


export default App;
