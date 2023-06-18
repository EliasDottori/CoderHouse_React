import React from "react";
import CounterCant from "./CounterCant";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const DetalleVino = ({ id, nombre, tipo, bodega, variedad, precio, img }) => {
  const image = `/images/wine/${img}`;
  const stock = 17;

  const { agregarVino } = useContext(CartContext);

  const handleCant = (cantidad) => {
    const item = { id, nombre, precio, img };
    agregarVino(item, cantidad);
  };

  return (
    <div className=" h-100 mx-auto flex w-85 justify-center  pt-48">
      <div className="h-100 flex w-70 flex-col items-center justify-evenly gap-10 border-2 border-solid border-superoscuro">
        <div className="flex w-full items-center justify-center">
          <p className="font-gab text-9xl">{nombre}</p>
        </div>
        <div className="flex w-full flex-row justify-around">
          <p className="text-gray-700">
            bodega:{" "}
            <span className="text-2xl not-italic text-black">{bodega}</span>
          </p>
          <p className="text-gray-700">
            variedad:{" "}
            <span className="text-2xl not-italic text-black">{variedad}</span>
          </p>
          <p className="text-gray-700">
            color:{" "}
            <span className="text-2xl not-italic text-black">{tipo}</span>
          </p>
        </div>
        <div className=" text-3xl">$ {precio}</div>

        <CounterCant inicial={1} stock={stock} funcionAgregar={handleCant} />
      </div>
      <div className="h-100 flex w-96 justify-center border-2 border-solid border-superoscuro py-3">
        <img
          className="duration-400 relative flex h-v60 items-center justify-center transition-all ease-linear"
          src={image}
          alt="vino"
        />
      </div>
    </div>
  );
};

export default DetalleVino;
