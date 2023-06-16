import { Link, useMatch, useResolvedPath } from "react-router-dom"


const NavBar = () => {
  return (
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="fluid">
        <div className="logo">
      
        <a className="today" href="/">TODAY</a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Nosotros">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contacto">Contáctanos</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;