import React from 'react';

const Nosotros = () => {
  return (
    <div className="container " >
      <h1 class="text-center display-4 ">Nosotras</h1>
      <div className="row">
        {/* Tarjeta 1 */}
        <div className="col-md-4">
          <div className="card rounded">
            <img src="/andrea.jpeg" className="card-img-top rounded" alt="Imagen de nosotros" />
            <div className="card-body">
              <h4 className="card-title text-center">Andrea Villamizar</h4>
              <h5 className="card-text text-center">Developer en formación</h5>
            </div>
          </div>
        </div>
        
        {/* Tarjeta 2 */}
        <div className="col-md-4">
          <div className="card rounded">
            <img src="/norma.jpeg" className="card-img-top rounded" alt="Imagen de nosotros" />
            <div className="card-body">
              <h4 className="card-title text-center">Norma Nardone</h4>
              <h5 className="card-text text-center">Developer en formación</h5>
            </div>
          </div>
        </div>
        
        {/* Tarjeta 3 */}
        <div className="col-md-4">
          <div className="card rounded">
            <img src="/osmary.jpeg" className="card-img-top rounded" alt="Imagen de nosotros" />
            <div className="card-body">
              <h4 className="card-title text-center">Osmary Alvarez</h4>
              <h5 className="card-text text-center">Developer en formación</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
