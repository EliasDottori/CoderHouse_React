import React from "react";

// import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Vino = (props) => {

  const { id, nombre, tipo, precio, img } = props.vino;

  const image = `/images/wine/${img}`;

  const icon =
    tipo === "Tinto" ? `/images/border-morado.png` : `/images/border-verde.png`;

  return (
    <div
      // ref={containerRef}
      className="flex flex-row mb-2 w-45 h-44 shadow-lg 
    bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 mt-48 
    rounded-2xl transition-all duration-400 ease-linear"
    >
      <img
        className="absolute transform -translate-y-5 -translate-x-5 h-30"
        alt="icon"
        src={icon}
      ></img>

      <div className="h-full flex items-center flex-col w-70 justify-evenly">
        <div className="flex w-full justify-around items-center">
          <p className="text-3xl">{nombre}</p>

          <Link to={`/VinoDetalleContainer/${id}`}
            className="bg-transparent rounded text-yellow-700 cursor-pointer border-2 border-solid
           border-ae8a26 w-20 h-9 transition-all duration-400 ease-linear hover:bg-yellow-700 hover:text-white"
            // ref={botonRef}
            // onClick={handleClick}
          >
            Mas Info
          </Link>
        </div>

        

        <div className="flex flex-row justify-around w-full">
          <h2>${precio}</h2>
          
        </div>
      </div>

      <div className="h-full flex justify-center items-end w-30">
        <img
          className="relative flex justify-center items-center w-20 h-88 transition-all duration-400 ease-linear"
          src={image}
          alt="vino"
        />
      </div>
    </div>
  );
};

export default Vino;


///////////////////////////////////////////////////////////////////////////////

  // const [expand, setExpand] = useState("height: 180px; margin-top: 190px;");

  // const [opacity, setOpacity] = useState("opacity: 0;");

  // useEffect(() => {
    //   containerRef.current.style = `${expand}`;
    //   typeRef.current.style = `${opacity}`;
  
    //   const handleClickOutside = (event) => {
    //     if (!botonRef.current.contains(event.target)) {
    //       setExpand("height: 11rem; margin-top: 11.8rem");
    //       setOpacity("opacity: 0; height: 0px; overflow: hidden;");
    //     }
    //   };
     //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [expand, opacity]);
    
//FUTURA APLICACION DE USE STATE

  // const botonRef = useRef();

  // const typeRef = useRef();

  // const containerRef = useRef();
  // function handleClick() {
    //   setExpand("height: 18rem; margin-top: 4.3rem");
    //   setOpacity("opacity: 1; height: 6.5rem; overflow: visible");
    // }
  // 

/* <div
          // ref={typeRef}
          className="opacity-0 h-0 overflow-hidden flex flex-col 
        w-full items-center justify-center ml-4 gap-4 transition-all duration-400 ease-linear"
        >
          <p className="text-black text-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            magni tenetur consectetur, voluptatibus quis ullam autem enim
            corrupti natus sed veritatis ad ex nesciunt nostrum architecto dicta
            sit unde nemo.
          </p>

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
        </div> */