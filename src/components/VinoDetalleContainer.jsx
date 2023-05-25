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

  console.log(vinos)

  return (
    <div className="  h-full w-full bg-yellow-200">
      <div className=" h-full w-full ">
      {vinos
          .filter((vinos) => vinos.id === id)
          .map((vinosFiltered) => (
            <DetalleVino key={id} {...vinosFiltered} />
          ))}
      </div>
      
    </div>
  );
};

export default VinoDetalleContainer;
