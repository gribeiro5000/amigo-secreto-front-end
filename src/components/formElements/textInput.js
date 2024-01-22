import styles from "./textInput.module.css";

function Input({text, placeholder, id, onChange}) {
  return (
    <div className={styles.input_container}>
      <label>{text}</label>
      <input
        onChange={onChange}
        type="text"
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
