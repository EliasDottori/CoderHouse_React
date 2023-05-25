import React from "react";
import CounterCant from "./CounterCant";


const DetalleVino = ({ nombre, tipo, bodega, variedad, precio, img }) => {

    const image = `/images/wine/${img}`;

  return (
    <div className=" flex h-auto w-85 justify-center">
      <div className="h-full flex items-center flex-col gap-10 w-70 justify-evenly">
        <div className="flex w-full justify-around items-center">
          <p className="text-3xl">{nombre}</p>
          </div>
          <div className="h-full flex justify-center items-end w-30">
        <img
          className="relative flex justify-center items-center w-20 h-88 transition-all duration-400 ease-linear"
          src={image}
          alt="vino"
        />
      </div>
      <div className="flex flex-row justify-around w-full">
            <p className="text-gray-700">
              bodega:{" "}
              <span className="text-black not-italic text-l">{bodega}</span>
            </p>
            <p className="text-gray-700">
              variedad:{" "}
              <span className="text-black not-italic text-l">{variedad}</span>
            </p>
            <p className="text-gray-700">
              color:{" "}
              <span className="text-black not-italic text-l">{tipo}</span>
            </p>
          </div>
      <div className=" text-lg10">{precio}</div>
      <CounterCant />
      </div>
    </div>
  );
};

export default DetalleVino;
