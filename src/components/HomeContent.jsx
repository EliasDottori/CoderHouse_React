import React from "react";
import VinoEspecial from "../components/VinoEspecial";
import VinoBodega from "../components/VinoBodega";
import { useState, useEffect } from "react";
import { db } from "../services/config";
import { collection, getDocs, query } from "firebase/firestore";

const HomeContent = () => {
  const [vinos, setVinos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

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
  }, []);

  if (isLoading) {
    return (
      <div
        className="flex h-48 items-start pt-12 justify-center bg-superclaro "
      >
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200"></div>
        <p className="ml-2">Cargando...</p>
      </div>
    );
  }

  return (
    <div>
      <VinoBodega bodega="La Rural" />
      <div className="h-50 w-full bg-superoscuro py-5 ">
        {vinos
          .filter((vinos) => vinos.nombre === "Iscay")
          .map((vinosFiltered) => (
            <VinoEspecial key={vinosFiltered.id} vino={vinosFiltered} />
          ))}
      </div>
      <VinoBodega bodega="Bianchi" />
      <div className="h-50 w-full bg-superoscuro py-5 ">
        {vinos
          .filter((vinos) => vinos.nombre === "Adrianna Vineyard")
          .map((vinosFiltered) => (
            <VinoEspecial key={vinosFiltered.id} vino={vinosFiltered} />
          ))}
      </div>
      <VinoBodega bodega="Haroldos" />
      <div className="h-50 w-full bg-superoscuro py-5 ">
        {vinos
          .filter((vinos) => vinos.nombre === "Nosotros")
          .map((vinosFiltered) => (
            <VinoEspecial key={vinosFiltered.id} vino={vinosFiltered} />
          ))}
      </div>
    </div>
  );
};

export default HomeContent;
