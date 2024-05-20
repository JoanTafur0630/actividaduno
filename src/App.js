import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";


import Inventario from './components/Inv';
import Entradas from './components/Entry';
import Salidas from './components/Salidas';
import Productos from "./components/Productos";
import ModalInventario from "./components/ModalInv";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="container">
        <div className="btn-group">
          <ul className="nav nav-tabs">
            
            <li className="nav-item">
              <NavLink to="/Productos" className="btn btn-dark me-3">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Entradas" className="btn btn-dark me-3">Mercancia</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Salidas" className="btn btn-dark me-3">Ventas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Inventario" className="btn btn-dark me-3">Inventario</NavLink>
            </li>
          </ul>
        </div>
        
      <ModalInventario/>
        <hr />
        <Routes>
          <Route path="/Inventario" element={<Inventario />} />
          <Route path="/Entradas" element={<Entradas />} />
          <Route path="/Salidas" element={<Salidas />} />
          <Route path="/" element={<Productos />} />
          <Route path="/Productos" element={<Productos />} />
        </Routes>        
      </div>

      
    </Router>


  );
}

export default App;
