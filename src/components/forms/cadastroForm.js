import TextInput from "../formElements/textInput.js";
import CheckboxInput from "../formElements/checkBoxInput.js";
import SubmitInput from "../formElements/submitInput.js";

import styles from "./cadastroForm.module.css";

function CadastroForm() {
  return (
    <div className={styles.cadastroForm}>
      <form>
        <h1>{"Cadastrar"}</h1>
        <TextInput
          text={"Nome Completo (*)"}
          id={"nome"}
          placeholder={"Nome"}
        />
        <TextInput
          text={"Digite seu e-mail (*)"}
          id={"email"}
          placeholder={"E-mail"}
        />
        <TextInput
          text={"Digite sua senha (*)"}
          id={"senha"}
          placeholder={"Senha"}
        />
        <TextInput
          text={"Confirme sua senha (*)"}
          id={"confirmacaoDeSenha"}
          placeholder={"Senha"}
        />
        <TextInput
          text={"Digite seu número de Celular"}
          id={"celular"}
          placeholder={"Celular"}
        />
        <CheckboxInput
          id={"politicaDePrivacidade"}
          name={"politicaDePrivacidade"}
          value={"sim"}
          text={"Eu li e concordo com as Políticas de Privacidade"}
        />
        <CheckboxInput
          id={"termosDeServiço"}
          name={"termosDeServiço"}
          value={"sim"}
          text={"Eu li e concordo com os Termos de Serviço"}
        />
        <SubmitInput id={"botaoCadastrar"} text={"Cadastrar"} />
      </form>
    </div>
  );
}

export default CadastroForm;
