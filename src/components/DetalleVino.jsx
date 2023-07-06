import React from "react";
import CounterCant from "./CounterCant";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import Swal from 'sweetalert2';


const DetalleVino = ({ id, nombre, tipo, bodega, variedad, precio, img, stock }) => {
  const image = `/images/wine/${img}`;

  const { agregarVino } = useContext(CartContext);

  const handleCant = (cantidad) => {
    const vino = { id, nombre, precio, img };
    agregarVino(vino, cantidad);
    Swal.fire({
      title: 'Agregado al Carrito!',
      text:  ` El vino ${vino.nombre} fue agregado correctamente al carrito` ,
      icon: 'success',
      confirmButtonText: 'Cool',
      background: "#FDE8B8",
    })
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
        <p className="text-gray-700">
            Stock Disponible:{" "}
            <span className="text-2xl not-italic text-black">{stock} Unidades</span>
          </p>
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
