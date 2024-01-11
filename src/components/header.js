import List from "./list";
import styles from "../components/header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <List items={props.listaInicio}></List>
      <List items={props.listaMeio}></List>
      <List items={props.listaFim}></List>
    </header>
  );
}

export default Header;
