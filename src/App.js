import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";
import Grupos from "./components/pages/grupos.js";
import Home from "./components/pages/home.js";
import ListaDeDesejos from "./components/pages/listaDeDesejos.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Grupos" element={<Grupos />} />
        <Route path="ListaDeDesejos" element={<ListaDeDesejos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
