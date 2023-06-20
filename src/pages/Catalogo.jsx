import React from "react";
import Vino from "../components/Vino";
import { useState, useEffect } from "react";
import { db } from "../services/config";
import { collection, getDocs, query } from "firebase/firestore";

const Catalogo = (idParam) => {
  let id = idParam.idCategoria;

  const [isLoading, setIsLoading] = useState(true);

  const [vinos, setVinos] = useState([]);

  useEffect(() => {
    const vinos = query(collection(db, "products"));
    getDocs(vinos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setVinos(nuevosProductos);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
    
  }, [id]);

  if (isLoading) {
    return (
      <div
        id="scrollObjetivo"
        className="flex h-v100 items-center justify-center bg-superclaro pt-40"
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
        className="min-h-v100 min-h-v100 mx-auto flex h-auto w-full flex-wrap justify-around pt-40"
      >
        {vinos.map((vinosFiltered) => (
          <Vino key={vinosFiltered.id} vino={vinosFiltered} />
        ))}
      </div>
    );
  }

  if (id === "2") {
    return (
      <div
        id="scrollObjetivo"
        className="min-h-v100 mx-auto  flex h-auto w-full flex-wrap justify-around pt-40 "
      >
        {vinos
          .filter((vinos) => vinos.tipo === "Tinto")
          .map((vinosFiltered) => (
            <Vino key={vinosFiltered.id} vino={vinosFiltered} />
          ))}
      </div>
    );
  }

  if (id === "3") {
    return (
      <div
        id="scrollObjetivo"
        className="min-h-v100 mx-auto flex h-auto w-full flex-wrap justify-around pt-40 "
      >
        {vinos
          .filter((vinos) => vinos.tipo === "Blanco")
          .map((vinosFiltered) => (
            <Vino key={vinosFiltered.id} vino={vinosFiltered} />
          ))}
      </div>
    );
  }
};

export default Catalogo;
