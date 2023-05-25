import "./App.css";
import CatalogoCompleto from "./pages//CatalogoCompleto"
import Navbar from "./components//Navbar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VinoDetalle from "./components/VinoDetalleContainer";
import Cart from "./components/Cart";
import CatalogoContainer from "./pages/CatalogoContainer";


function App() {
  const clickScroll = () => {
    try{const element = document.getElementById('scrollObjetivo');
    element.scrollIntoView({ behavior: 'smooth' });}
    catch{console.log()}
    
  };

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Home clickScroll={clickScroll}/>
          <Routes>
            <Route path="/VinoDetalleContainer/:id" element={<VinoDetalle />} />
            <Route path="/" element={<CatalogoCompleto />} />
            <Route path="/Catalogo/:id" element={<CatalogoContainer />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
