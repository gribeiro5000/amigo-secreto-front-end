import styles from "./textInput.module.css";

function Input({text, placeholder, id}) {
  return (
    <div className={styles.input_container}>
      <label>{text}</label>
      <input type="text" id={id} placeholder={placeholder} />
    </div>
  );
}

export default Input;
