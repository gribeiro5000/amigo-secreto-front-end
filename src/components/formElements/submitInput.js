import styles from "./submitInput.module.css";

const SubmitInput = ({id, text}) => {
  return (
    <button type="submit" id={id}>
      {text}
    </button>
  );
};

export default SubmitInput;

// function SubmitButton({text, id}) {
//   return (
//     <div className={styles.submitButton}>
//       <input type="submit" id={id} value={text} />
//     </div>
//   );
// }

// export default SubmitButton;
