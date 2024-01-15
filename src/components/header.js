import List from "./list";

import logo from "../img/logo.png";
import bonecoAmarelo from "../img/boneco-amarelo.png";

import styles from "../components/header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <List
        items={[
          <img src={logo} width="85px" alt="Logo do site - amigo secreto" />,
        ]}></List>
      <List
        items={["Criar Grupos", "Meus Grupos"]}
        className={styles.flexList}></List>
      <List
        items={[
          <img src={bonecoAmarelo} width="90px" alt="boneco amarelo - menu" />,
        ]}></List>
    </header>
  );
}

export default Header;
