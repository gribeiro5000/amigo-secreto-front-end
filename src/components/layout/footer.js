import {Link} from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer>
      <div>
        <p>©2023 Amigo Secreto. Todos os direitos reservados.</p>
        <p>
          Desenvolvido por
          <Link
            to="https://github.com/gribeiro5000"
            className={styles.linkFooter}>
            Gabriel Ribeiro
          </Link>
          e
          <Link to="https://github.com/NMD01" className={styles.linkFooter}>
            Nathan Martini
          </Link>
        </p>
      </div>

      <ul className={styles.listaFoot}>
        <li>Amigo Secreto</li>
        <li>Política de Privacidade</li>
        <li>Termos de Serviço</li>
      </ul>

      <ul className={styles.listaFoot}>
        <li>Contato: contato@seudominio.com</li>
        <li>Siga-nos nas redes sociais: [Links para redes sociais]</li>
      </ul>
    </footer>
  );
}

export default Footer;
