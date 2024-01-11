import styles from "./checkBoxInput.module.css";

function CheckBox({id, name, value, text}) {
  return (
    <div className={styles.checkboxInput}>
      <input type="checkbox" id={id} name={name} value={value} />
      <label for={id}>{text}</label>
    </div>
  );
}

export default CheckBox;
