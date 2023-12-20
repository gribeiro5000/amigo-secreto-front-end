import {Link} from "react-router-dom";

import logo from "../../img/logo.png";
import styles from "./header.module.css";

function header() {
  return (
    <div className={styles.navbar}>
      <header>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/Grupos">Criar Grupo</Link>
          </li>
          <li>
            <Link to="/Grupos">Meus Grupos</Link>
          </li>
          <li>
            <Link to="/ListaDeDesejos">Minha Lista De Desejos</Link>
          </li>
        </ul>
        <div className={styles.loginContainer}>
          <Link to="/" className={styles.cadastro}>
            Cadastrar
          </Link>
          <Link to="/login" className={styles.entrar}>
            Entrar
          </Link>
        </div>
      </header>
    </div>
  );
}

export default header;
