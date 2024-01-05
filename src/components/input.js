import styles from "./input.module.css";

function Input({key, text, placeholder, id, type}) {
  return (
    <div className={styles.input_container}>
      <label>{text}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
}

export default Input;
