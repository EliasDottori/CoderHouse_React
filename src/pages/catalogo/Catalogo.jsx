import React from "react";
import "./Catalogo.css"
import Vino from "../../components/vino/Vino"

const catalogo = () => {
  return (
    <div className="fondoMadera">
        <div id="ofertaHTML" className="sectionOferta">
          <Vino />
          <Vino />
          <Vino />
          <Vino />
        </div>
    </div>
  );
};

export default catalogo;
