import styles from "./button.module.css";

function button({text}) {
  return <button className={styles.btnTest}>{text}</button>;
}

export default button;
