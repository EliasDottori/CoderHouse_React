import React from "react";
import "./Catalogo.css";
import Vino from "../../components/vino/Vino";

const vino1 = {
  nombre: "Iscay",
  bodega: "Trapiche",
  tipo: "Tinto",
  variedad: "Malbec & Cabernet-French",
  precio: 27510,
}

const vino2 = {
  nombre: "Los Haroldos",
  bodega: "Haroldos",
  tipo: "Tinto",
  variedad: "Malbec",
  precio: 2280,
}

const vino3 = {
  nombre: "Latitud 33°",
  bodega: "33°",
  tipo: "Tinto",
  variedad: "Malbec",
  precio: 1650,
}

const vino4 = {
  nombre: "Etchart Privado",
  bodega: "Etchart",
  tipo: "Blanco",
  variedad: "Torrontés",
  precio: 950,
}


const catalogo = () => {
  return (
    <div className="fondoMadera">
      <div id="ofertaHTML" className="sectionOferta">
        <Vino
          vino={vino1}
        />
        <Vino
          vino={vino2}
        />
         <Vino
          vino={vino3}
        />
        <Vino
          vino={vino4}
          />
      </div>
    </div>
  );
};

export default catalogo;
