import List from "./list";
import styles from "../components/footer.module.css";

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <List items={props.listaInicio}></List>
      <List items={props.listaMeio}></List>
      <List items={props.listaFim}></List>
    </footer>
  );
}

export default Footer;
