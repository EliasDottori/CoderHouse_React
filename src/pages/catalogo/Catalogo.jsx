import React from "react";
import "./Catalogo.css";
import Vino from "../../components/vino/Vino";
import { useState, useEffect } from "react";

const Catalogo = () => {
  const [vinos, setVinos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("/data/vino.json")
        .then((respuesta) => respuesta.json())
        .then((datosJson) => setVinos(datosJson))
        .catch((error) => console.log(error));
    }, 2000);
  }, []);

  return (
    <div className="fondoMadera">
      <div id="ofertaHTML" className="sectionOferta">
        {vinos
          .filter((vinos) => vinos.especial < 1)
          .map((vinosFiltered) => (
            <Vino key={vinosFiltered.id} vino={vinosFiltered} />
          ))}
      </div>
    </div>
  );
};

export default Catalogo;
