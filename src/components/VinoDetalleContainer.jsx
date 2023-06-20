import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DetalleVino from "./DetalleVino";
import { db } from "../services/config";
import { collection, getDocs, query } from "firebase/firestore";

const VinoDetalleContainer = () => {
  const { id } = useParams();

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
