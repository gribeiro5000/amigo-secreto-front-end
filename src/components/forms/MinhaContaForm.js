import TextInput from "../formElements/textInput";
import SubmitInput from "../formElements/submitInput";

import styles from "./MinhaContaForm.module.css";

function MinhaContaForm() {
  return (
    <div className={styles.MinhaContaForm}>
      <form>
        <h1>Minha Conta</h1>
        <TextInput text={"Nome Completo"} id={"nome"} placeholder={""} />
        <TextInput text={"E-mail"} id={"email"} placeholder={""} />
        <TextInput text={"Celular"} id={"celular"} placeholder={""} />
        <h1>Alterar Senha</h1>
        <TextInput text={"Senha Atual"} id={"senha"} placeholder={""} />
        <TextInput text={"Nova Senha"} id={"novaSenha"} placeholder={""} />
        <TextInput
          text={"Confirmar nova Senha"}
          id={"confirmacaoDeSenha"}
          placeholder={""}
        />
        <SubmitInput
          id={"botaoSalvarConfiguraçoes"}
          text={"Salvar Configurações"}
        />
      </form>
    </div>
  );
}

export default MinhaContaForm;
