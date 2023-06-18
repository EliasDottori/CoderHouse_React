import React from "react";
import { Link } from "react-router-dom";

const VinoEspecial = (vinos) => {
  const { id, nombre, bodega, variedad, tipo, precio, img } = vinos.vino;

  const image = `/images/wine/${img}`;
  return (
    <div className="mx-auto flex h-full w-85 border-2 border-solid border-superclaro">
      <div className="flex h-full w-70 flex-col items-center justify-evenly">
        <div className="flex w-full items-center justify-around">
          <Link
            to={`/VinoDetalleContainer/${id}`}
            className="font-gab text-7xl text-superclaro
          hover:underline "
          >
            {nombre}
          </Link>
        </div>

        <div
          className="duration-400 ml-4 
        flex w-full flex-col items-center justify-center gap-4 transition-all ease-linear"
        >
          <p className="text-xs text-superclaro">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            magni tenetur consectetur, voluptatibus quis ullam autem enim
            corrupti natus sed veritatis ad ex nesciunt nostrum architecto dicta
            sit unde nemo.
          </p>

          <div className="flex w-full flex-row justify-around">
            <p className="text-gray-700">
              bodega:{" "}
              <span className="text-xl not-italic text-superclaro">
                {bodega}
              </span>
            </p>
            <p className="text-gray-700">
              variedad:{" "}
              <span className="text-xl not-italic text-superclaro">
                {variedad}
              </span>
            </p>
            <p className="text-gray-700">
              color:{" "}
              <span className="text-xl not-italic text-superclaro">{tipo}</span>
            </p>
          </div>
        </div>

        <div className=" flex w-full flex-row justify-around text-3xl text-superclaro">
          <h2>${precio}</h2>
        </div>
      </div>

      <div className="flex h-full w-30 items-end justify-center">
        <img
          className="h-88 duration-400 relative flex w-20 items-center justify-center transition-all ease-linear"
          src={image}
          alt="vino"
        />
      </div>
    </div>
  );
};

export default VinoEspecial;
