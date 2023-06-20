import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  cantTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantTotal, setCantTotal] = useState(0);

  const agregarVino = (item, cantidad, img) => {
    
    const vinoExist = cart.find((prod) => prod.item.id === item.id);

    if (!vinoExist) {
      setCart((prev) => [...prev, { item, cantidad, img }]);
      setCantTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    } else {
      const cartActualizado = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cant: prod.cant + cantidad };
        } else {
          return prod;
        }
      });
      setCart(cartActualizado);
      setCantTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    }
  };


  const deleteVino = (id) => {
    const vinoDelete = cart.find((prod) => prod.item.id === id);
    const cartActualizado = cart.filter((prod) => prod.item.id !== id);
    setCart(cartActualizado);
    setCantTotal((prev) => prev - vinoDelete.cantidad);
    setTotal((prev) => prev - vinoDelete.item.precio * vinoDelete.cantidad);
  };

  const vaciarCart = () => {
    setCart([]);
    setCantTotal(0);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarVino,
        deleteVino,
        vaciarCart,
        total,
        cantTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
