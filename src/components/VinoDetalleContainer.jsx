import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DetalleVino from "./DetalleVino";

const VinoDetalleContainer = () => {
  const { id } = useParams();

  const [vinos, setVinos] = useState([]);


  useEffect(() => {
      fetch("/data/vino.json")
        .then((respuesta) => respuesta.json())
        .then((datosJson) => setVinos(datosJson))
        .catch((error) => console.log(error));
    
  }, []);

  return (
      <div className=" h-v100 w-full bg-superclaro">
      {vinos
          .filter((vinos) => vinos.id === id)
          .map((vinosFiltered) => (
            <DetalleVino key={id} {...vinosFiltered} />
          ))}
      </div>
  );
};

export default VinoDetalleContainer;
