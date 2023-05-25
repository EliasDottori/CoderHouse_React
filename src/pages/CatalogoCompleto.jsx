import React from "react";
import Vino from "../components/Vino";
import { useState, useEffect } from "react";

const CatalogoCompleto = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [vinos, setVinos] = useState([]);

  const autoScroll = () => {
    const element = document.getElementById('scrollObjetivo');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("/data/vino.json")
        .then((respuesta) => respuesta.json())
        .then((datosJson) => {
          setVinos(datosJson);
          setIsLoading(false);
          autoScroll()
        })
        .catch((error) => console.log(error));
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div id="scrollObjetivo" className="flex h-32 items-center justify-center bg-yellow-200">
        <div
          className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200"
        ></div>
        <p className="ml-2">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-yellow-200 bg-cover bg-fixed bg-center bg-no-repeat">
      <div
        id="scrollObjetivo"
        className="mx-auto flex h-auto w-85 flex-wrap justify-around"
      >
        {vinos.map((vinos) => (
          <Vino key={vinos.id} vino={vinos} />
        ))}
      </div>
    </div>
  );
};

export default CatalogoCompleto;
