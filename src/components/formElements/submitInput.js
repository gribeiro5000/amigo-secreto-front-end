import styles from "./submitInput.module.css";

function SubmitButton({text, id}) {
  return (
    <div className={styles.submitButton}>
      <input type="submit" id={id} value={text} />
    </div>
  );
}

export default SubmitButton;
