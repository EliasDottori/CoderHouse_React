import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <nav className="w-full flex items-center justify-between box-border 
      overflow-hidden fixed top-0 p-2 h-24 bg- z-50
      bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 bg-27deg">

        <Link to="/" title="inicio" className="h-full bg-contain bg-no-repeat bg-center w-56 bg-icon"></Link>

        <div className="flex justify-around items-center w-6/12 h-full">

          <Link to="/Catalogo/1" className="flex justify-center items-center h-full 
          no-underline text-black font-gab text-4xl w-64 border-l-2 border-r-2 border-fde3cd">
            Vinos Seleccionados
          </Link>

          <Link to="/Catalogo/2" className="flex justify-center items-center h-full 
          no-underline text-black font-gab text-4xl w-64 border-l-2 border-r-2 border-fde3cd">
            Vinos Tintos
          </Link>

          <Link to="/Catalogo/3" className="flex justify-center items-center h-full 
          no-underline text-black font-gab text-4xl w-64 border-l-2 border-r-2 border-fde3cd">
            Vinos Blancos
          </Link>

        </div>
          <CartWidget />
      </nav>

      <div className="bg-yellow-200 w-full fixed left-0 flex justify-around items-center h-12 top-24 z-50">
        <div className="flex items-center gap-2">
          
          <h4>Ordenar por Precio</h4>
          <select
            name="select"
            defaultValue="0"
            id="selectOrden"
            className="rounded bg-orange-200 w-40 h-8"
          >
            <option className="bg-orange-200" value="0">Seleccione</option>
            <option className="bg-orange-200" value="1">Menor a Mayor</option>
            <option className="bg-orange-200" value="2">Mayor a Menor</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default navbar;
