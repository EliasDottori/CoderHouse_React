import "./App.css";
import Navbar from "./components//Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VinoDetalle from "./components/VinoDetalleContainer";
import Cart from "./components/Cart";
// import CatalogoEspecial from "./pages/CatalogoEspecial";
import CatalogoContainer from "./pages/CatalogoContainer";
import { CartProvider } from './context/CartContext';
import Checkout from "./components/Checkout";


function App() {
  

  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/VinoDetalleContainer/:id" element={<VinoDetalle />} />
            <Route path="/Catalogo/:id" element={<CatalogoContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </div>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
