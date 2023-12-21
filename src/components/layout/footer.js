import {Link} from "react-router-dom";
import styles from "./footer.module.css";
import List from "../list";

function Footer(props) {
  return (
    <footer>
      <List items={props.listaInicio}></List>

      <List items={props.listaMeio}></List>

      <List items={props.listaFim}></List>
    </footer>
  );
}

export default Footer;
