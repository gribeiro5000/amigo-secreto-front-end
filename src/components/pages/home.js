import Header from "../layout/header.js";
import Footer from "../layout/footer.js";
import styles from "../layout/footer.js";
import {Link} from "react-router-dom";

function home() {
  return (
    <div>
      <Header></Header>
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
          "Contato: contato@seudominio.com",
          "Siga-nos nas redes sociais: [Links para redes sociais]",
        ]}></Footer>
    </div>
  );
}

export default home;
