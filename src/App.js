import {BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";
import Grupos from "./components/pages/grupos.js";
import Login from "./components/pages/login.js";
import Home from "./components/pages/home.js";
import ListaDeDesejos from "./components/pages/listaDeDesejos.js";
import Cadastro from "./components/pages/cadastro.js";
import InformacoesDoGrupo from "./components/pages/informacoesDoGrupo.js";
import CriarGrupos from "./components/pages/criarGrupos.js";
import MinhaConta from "./components/pages/minhaConta.js";
import RecuperarSenha from "./components/pages/recuperarSenha.js";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import Vector from "./components/vector.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="Cadastro" element={<Cadastro />} />
        <Route path="Grupos" element={<Grupos />} />
        <Route path="InformacoesDoGrupo" element={<InformacoesDoGrupo />} />
        <Route path="CriarGrupos" element={<CriarGrupos />} />
        <Route path="MinhaConta" element={<MinhaConta />} />
        <Route path="RecuperarSenha" element={<RecuperarSenha />} />
        <Route path="ListaDeDesejos" element={<ListaDeDesejos />} />
      </Routes>

      <div className="containerFooter">
        <Vector></Vector>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
