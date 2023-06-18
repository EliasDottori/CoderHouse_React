import React from "react";
import { useState, useEffect } from "react";
import { db } from "../services/config";
import { collection, getDocs, query } from "firebase/firestore";
import VinoEspecial from "../components/VinoEspecial";
import VinoBodega from "../components/VinoBodega";
import { Link } from "react-router-dom";

const Home = () => {
  const [vinos, setVinos] = useState([]);

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
    }, 2000);
  }, []);

  return (
    <div className="mt-36 h-70 w-full bg-fondoCopas bg-cover bg-center bg-no-repeat">
      <div className="h- flex h-90 w-full flex-col items-center justify-evenly text-lg">
        <p className="font-gab text-9xl"> El Bodegon </p>
      </div>
      <div className="linear h-10 w-full transition-all duration-500 hover:bg-[rgba(39,41,44,0.6)]">
        <Link
          to="/"
          className="mx-auto flex h-full w-6/12 cursor-pointer items-center
                    justify-center rounded-t-full bg-[rgba(31,32,35,0.6)] text-2xl text-white no-underline"
        >
          Ver todos nuestros Productos
        </Link>
      </div>
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

export default Home;
