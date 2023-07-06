import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ vino, cantidad }) => {


  const { id, nombre, precio, img } = vino
  
  const { deleteVino } = useContext(CartContext);
  const image = `/images/wine/${img}`;
  const precioTotalItem = precio * cantidad;

  return (
    <div className="w-100 mx-14 box-border flex h-32 border-b-2 border-superoscuro mt-20">
      <div className="flex h-full w-30 items-end justify-center">
        <img
          className="duration-400 relative flex h-48  items-center justify-center transition-all ease-linear"
          src={image}
          alt="vino"
        />
      </div>
      <div
        className=" mx-auto flex h-16 w-70 flex-col items-center
     "
      >
        <h4 className="flex w-full items-center justify-around font-gab text-6xl">
          {" "}
          {nombre}{" "}
        </h4>
        <div
          className="ml-4 flex 
          w-full items-center justify-center gap-4 "
        >
          <p className="text-xs text-superoscuro">Cantidad: {cantidad} </p>
        </div>
      </div>
      <div className="ml-4 flex flex-col
        w-full items-center justify-center gap-4">
        <p className="text-xs text-superoscuro">Precio: {precio} </p>
        <p className="text-xl text-superoscuro">Precio Total: {precioTotalItem} </p>
      </div>
      <button
        className="h-14 cursor-pointer rounded border border-black bg-orange-200 p-2 active:bg-orange-300 "
        onClick={() => deleteVino(id)}
      >
        {" "}
        Eliminar{" "}
      </button>
    </div>
  );
};

export default CartItem;
