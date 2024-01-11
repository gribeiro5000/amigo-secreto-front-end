import styles from "./list.module.css";

function List(props) {
  let listItems = props.items.map((items, index) => (
    <li className={styles.li} key={index}>
      {items}
    </li>
  ));

  return <ul className={styles.ul}>{listItems}</ul>;
}

export default List;
