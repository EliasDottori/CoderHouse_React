import React from "react";
import "./Vino.css";
import CounterCant from "../counterCant/CounterCant";
import { useState, useEffect, useRef } from "react";

const Vino = (props) => {
  const { nombre, bodega, tipo, variedad, precio, img } = props.vino;

  const [expand, setExpand] = useState("height: 180px; margin-top: 190px;");

  const [opacity, setOpacity] = useState("opacity: 0;");

  const botonRef = useRef();

  const typeRef = useRef(null);

  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.style = `${expand}`;
    typeRef.current.style = `${opacity}`;

    const handleClickOutside = (event) => {
      if (!botonRef.current.contains(event.target)) {
        setExpand("height: 180px; margin-top: 190px");
        setOpacity("opacity: 0; height: 0px;");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [expand, opacity]);

  function handleClick() {
    setExpand("height: 300px; margin-top: 70px");
    setOpacity("opacity: 1; height: 105px");
  }

  const image = `/images/wine/${img}`;

  const icon =
    tipo === "Tinto" ? `/images/border-morado.png` : `/images/border-verde.png`;

  return (
    <div ref={containerRef} className="containerVino">
      <img className="uva" alt="icon" src={icon}></img>
      <div className="textContainer">
        <div className="containerTitle">
          <h1>{nombre}</h1>
          <button className="btnExpand" ref={botonRef} onClick={handleClick}>
            Mas Info
          </button>
        </div>

        <div ref={typeRef} className=" opac tipoText">
          <p className="textDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            magni tenetur consectetur, voluptatibus quis ullam autem enim
            corrupti natus sed veritatis ad ex nesciunt nostrum architecto dicta
            sit unde nemo.
          </p>

          <div className="listTipo">
            <p>
              bodega: <span>{bodega}</span>
            </p>
            <p>
              variedad: <span>{variedad}</span>
            </p>
            <p>
              color: <span>{tipo}</span>
            </p>
          </div>
        </div>
        <div className="listTipo">
          <h2>${precio}</h2>
          <CounterCant />
        </div>
      </div>
      <div className="imgContainer">
        <img
          className="imgVino"
          src={image}
          alt="vino"
          height={350}
          width={100}
        />
      </div>
    </div>
  );
};

export default Vino;
