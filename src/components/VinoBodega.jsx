import React from "react";
import Vino from "../components/Vino";
import { useState, useEffect } from "react";
import { db } from "../services/config";
import { collection, getDocs, query } from "firebase/firestore";

const VinoBodega = (bodega1) => {
    const bodega = bodega1.bodega
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
        })
        .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="h-auto w-full bg-superclaro py-5">
        <div className="mx-auto h-full w-85 border-2 border-solid border-superoscuro">
          <h1 className="p-5 font-gab text-9xl ">Bodega {bodega}</h1>
          <div className="mx-auto flex h-auto w-full flex-wrap justify-around">
            {vinos
              .filter((vinos) => vinos.bodega === bodega)
              .map((vinosFiltered) => (
                <Vino key={vinosFiltered.id} vino={vinosFiltered} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VinoBodega;
