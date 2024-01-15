import TextInput from "../formElements/textInput.js";
import SubmitInput from "../formElements/submitInput.js";

import styles from "./recuperarSenhaForm.module.css";

function RecuperarSenhaForm() {
  return (
    <div className={styles.recuperarSenhaForm}>
      <form>
        <h1>Recuperação de Senha</h1>
        <p>
          Esqueceu sua senha? Não se preocupe, estamos aqui para ajudar Por
          favor, siga as instruções abaixo para recuperar o acesso a sua conta:
        </p>
        <TextInput
          text={"Digite seu e-mail cadastrado"}
          id={"email"}
          placeholder={"E-mail"}
        />
        <SubmitInput id={"botaoEnviar"} text={"Enviar"} />
      </form>
    </div>
  );
}

export default RecuperarSenhaForm;
