import List from "./list";
import styles from "../components/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <List
        items={[
          "©2023 Amigo Secreto. Todos os direitos reservados.",
          "Desenvolvido por Gabriel Ribeiro e Nathan martini",
        ]}></List>
      <List
        items={[
          "Amigo Secreto",
          "Política de Privacidade",
          "Termos de Serviço",
        ]}></List>
      <List
        items={[
          "Contato:",
          "gribeiro.gr17@gmail.com",
          "nathan.martinid@gmail.com",
        ]}></List>
    </footer>
  );
}

export default Footer;
