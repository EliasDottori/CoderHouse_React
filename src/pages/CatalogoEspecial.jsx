import React from "react";
import Vino from "../components/Vino";
import { useState, useEffect } from "react";
import { db } from "../services/config";
import { collection, getDocs, query } from "firebase/firestore";

const CatalogoEspecial = (idParam) => {

  let id = idParam.idCategoria

  const [isLoading, setIsLoading] = useState(true);

  // const autoScroll = () => {
  //   const element = document.getElementById("scrollObjetivo");
  //   element.scrollIntoView({ behavior: "smooth" });
  // };

  const [vinos, setVinos] = useState([]);

 console.log(id)

  useEffect(() => {
    const vinos = query(collection(db, "products"));

    setTimeout(() => {
      getDocs(vinos)
        .then((res) => {
          const nuevosProductos = res.docs.map((doc) => {
            const data = doc.data();
            return { id: doc.id, ...data };
          });
          setVinos(nuevosProductos);
        })
        .catch((error) => console.log(error));

      setIsLoading(false);
      // autoScroll();
    }, 2000);
  }, [id]);

  if (isLoading) {
    return (
      <div
        id="scrollObjetivo"
        className="flex h-32 items-center justify-center bg-superclaro"
      >
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200"></div>
        <p className="ml-2">Cargando...</p>
      </div>
    );
  }

  if (id === "1") {
    return (
        <div
          id="scrollObjetivo"
          className="mx-auto flex h-auto w-full flex-wrap justify-around"
        >
          {vinos
            .filter((vinos) => vinos.especial === 1)
            .map((vinosFiltered) => (
              <Vino key={vinosFiltered.id} vino={vinosFiltered} />
            ))}
        </div>
    );
  }

  if (id === "2") {
    return (
        <div
          id="scrollObjetivo"
          className="mx-auto flex h-auto w-full flex-wrap justify-around "
        >
          {vinos
            .filter((vinos) => vinos.especial < 1)
            .map((vinosFiltered) => (
              <Vino key={vinosFiltered.id} vino={vinosFiltered} />
            ))}
        </div>
    );
  }
};

export default CatalogoEspecial;
