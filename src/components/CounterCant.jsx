import { Link } from "react-router-dom";
import { useState } from "react";

const CounterCant = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="flex w-45 justify-between pb-5">
      <button
        onClick={decrementar}
        className="w-8 cursor-pointer rounded border border-black bg-orange-200 p-1 font-bold active:bg-orange-300"
      >
        -
      </button>
      <p className="w-12 rounded border border-black bg-orange-200 text-center">
        {contador}
      </p>
      <button
        onClick={incrementar}
        className="w-8 cursor-pointer rounded border border-black bg-orange-200 p-1 font-bold active:bg-orange-300"
      >
        +
      </button>
      {stock > 0 && (
        <button
          onClick={() => funcionAgregar(contador)}
          className="cursor-pointer rounded border border-black bg-orange-200 p-1 active:bg-orange-300"
        >
          Agregar
        </button>
      )}
      <Link
        to="/"
        className="cursor-pointer rounded border border-black bg-orange-200 p-1 active:bg-orange-300"
      >
        Volver
      </Link>
    </div>
  );
};

export default CounterCant;
