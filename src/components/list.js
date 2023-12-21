import styles from "./layout/footer.module.css";
function list(props) {
  let listItems = props.items.map((items, index) => (
    <li key={index}>{items}</li>
  ));

  return <ul className={styles.listaFoot}>{listItems}</ul>;
}

export default list;
