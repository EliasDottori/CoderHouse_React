import React from "react";
import Vino from "../components/Vino";
import { useState, useEffect } from "react";

const CatalogoEspecial = (idCategoria) => {
  const [isLoading, setIsLoading] = useState(true);

  const [vinos, setVinos] = useState([]);

  const autoScroll = () => {
    const element = document.getElementById("scrollObjetivo");
    element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("/data/vino.json")
        .then((respuesta) => respuesta.json())
        .then((datosJson) => {
          setVinos(datosJson);
          setIsLoading(false);
          autoScroll();
        })
        .catch((error) => console.log(error));
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div
        id="scrollObjetivo"
        className="flex h-32 items-center justify-center bg-yellow-200"
      >
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200"></div>
        <p className="ml-2">Cargando...</p>
      </div>
    );
  }

  console.log(idCategoria);
  switch (idCategoria) {
    case "1":
      return (
        <div
          id="scrollObjetivo"
          className="mx-auto flex h-auto w-full flex-wrap justify-around  bg-yellow-200"
        >
          {vinos
            .filter((vinos) => vinos.especial < 1)
            .map((vinosFiltered) => (
              <Vino key={vinosFiltered.id} vino={vinosFiltered} />
            ))}
        </div>
      );
    case "2":
      return (
        <div
          id="scrollObjetivo"
          className="mx-auto flex h-auto w-full flex-wrap justify-around  bg-yellow-200"
        >
          {vinos
            .filter((vinos) => vinos.tipo === "tinto")
            .map((vinosFiltered) => (
              <Vino key={vinosFiltered.id} vino={vinosFiltered} />
            ))}
        </div>
      );
    case "3":
      return (
        <div
          id="scrollObjetivo2"
          className="mx-auto flex h-auto w-full flex-wrap justify-around  bg-yellow-200"
        >
          {vinos
            .filter((vinos) => vinos.tipo === "blanco")
            .map((vinosFiltered) => (
              <Vino key={vinosFiltered.id} vino={vinosFiltered} />
            ))}
        </div>
      );
    default:
      return (
        <div
          id="scrollObjetivo3"
          className="mx-auto flex h-auto w-85 flex-wrap justify-around"
        >
          {vinos.map((vinos) => (
            <Vino key={vinos.id} vino={vinos} />
          ))}
        </div>
      );
  }
};

export default CatalogoEspecial;
