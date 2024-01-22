import styles from "./checkBoxInput.module.css";

function CheckBox({id, name, value, text, onChange}) {
  return (
    <div className={styles.checkboxInput}>
      <input
        onChange={onChange}
        type="checkbox"
        id={id}
        name={name}
        value={value}
      />
      <label for={id}>{text}</label>
    </div>
  );
}

export default CheckBox;
