import TextInput from "../formElements/textInput";
import SubmitInput from "../formElements/submitInput";

import styles from "./loginForm.module.css";

function loginForm() {
  return (
    <div className={styles.loginForm}>
      <form>
        <h1>{"Login"}</h1>
        <TextInput
          text={"Digite seu E-mail"}
          id={"email"}
          placeholder={"E-mail"}
        />
        <TextInput
          text={"Digite sua Senha"}
          id={"senha"}
          placeholder={"Senha"}
        />
        <SubmitInput id={"botaoEntrar"} text={"Entrar"} />
      </form>
    </div>
  );
}

export default loginForm;
