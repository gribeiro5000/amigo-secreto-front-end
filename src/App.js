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

function App() {
  return (
    <BrowserRouter>
      <Header
        listaInicio={[
          <img src="./img/logo.png" alt="Logo do site - amigo secreto" />,
        ]}
        listaMeio={["Criar Grupos", "Meus Grupos"]}
        listaFim={[
          <img src="./img/boneco-amarelo.png" alt="boneco amarelo - menu" />,
        ]}></Header>

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

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 1919 1029"
          fill="none">
          <path
            d="M1917.75 0.154297C1797.88 1340.72 -2.797 972.269 -2.797 972.269L-2.23294 1012.66L1922.21 1033.31L1917.75 0.154297Z"
            fill="#FFC446"
          />
        </svg>

        <Footer
          listaInicio={[
            "©2023 Amigo Secreto. Todos os direitos reservados.",
            "Desenvolvido por Gabriel Ribeiro e Nathan martini",
          ]}
          listaMeio={[
            "Amigo Secreto",
            "Política de Privacidade",
            "Termos de Serviço",
          ]}
          listaFim={[
            "Contato:",
            "gribeiro.gr17@gmail.com",
            "nathan.martinid@gmail.com",
          ]}></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
