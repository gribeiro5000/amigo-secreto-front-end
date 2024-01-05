import styles from "./input.module.css";

function Input(props) {
  let listInput = props.inputs.map((input, index) => (
    <div key={index} className={styles.input_container}>
      <label>{input.titulo}</label>
      <input placeholder={input.placeholder} />
    </div>
  ));

  return <div>{listInput}</div>;
}

export default Input;
