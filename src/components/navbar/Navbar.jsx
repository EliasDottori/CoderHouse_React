import React from "react";
import "./Navbar.css";

const navbar = () => {
  return (
    <div>
      <nav>
        <div title="inicio"  className="logo"></div>
        <div className="containerBtnNav">
          <button id="btnOfertaHTML" className="btnNone btnNav">
            Vinos Seleccionados
          </button>
          <button id="btnCatalogoHTML" className="btnNone btnNav">
            Catalogo completo
          </button>
        </div>
        <div className="containerOpcion">

          <button id="btnCarritoHTML" className="btnNone btnCarrito">
            <div className="numberCarrito">0</div>
          </button>
        </div>
      </nav>
      <div className="expansibleNav">
        <div className="selectNameContainer">
          <h4>Ordenar por Precio</h4>
          <select
            name="select"
            defaultValue="0"
            id="selectOrden"
            className="expansibleOption"
          >
            <option value="0">Seleccione</option>
            <option value="1">Menor a Mayor</option>
            <option value="2">Mayor a Menor</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default navbar;
