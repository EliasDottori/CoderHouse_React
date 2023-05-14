import "./App.css";
import Catalogo from "./pages/catalogo/Catalogo";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";


function App() {
  return (
    <div className="containerGral">
      <Navbar />
      <Home />
      <Catalogo />
      <Catalogo />
      <Catalogo />
      <Catalogo />
    </div>
  );
}

export default App;
