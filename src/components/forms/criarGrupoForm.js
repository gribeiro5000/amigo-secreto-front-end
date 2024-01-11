import TextInput from "../formElements/textInput.js";
import SubmitInput from "../formElements/submitInput.js";

import styles from "./criarGrupoForm.module.css";

function CriarGrupoForm() {
  return (
    <div className={styles.criarGrupoForm}>
      <form>
        <h1></h1>
        <TextInput
          text={"Digite o nome do grupo (*)"}
          id={"nomeGrupo"}
          placeholder={"Nome do Grupo"}
        />
        <TextInput
          text={"Digite o Endereço (*)"}
          id={"endereço"}
          placeholder={"Endereço Completo"}
        />
        <TextInput
          text={"Dia do Sorteio (*)"}
          id={"diaSorteio"}
          placeholder={"dia/mês/ano"}
        />
        <TextInput
          text={"Dia do Evento (*)"}
          id={"diaEvento"}
          placeholder={"dia/mês/ano"}
        />
        <TextInput
          text={"Preço Mínimo"}
          id={"preçoMin"}
          placeholder={"R$ 00,00"}
        />
        <TextInput
          text={"Preço Máximo"}
          id={"preçoMax"}
          placeholder={"R$ 00,00"}
        />
        <TextInput
          text={"Observação"}
          id={"observaçao"}
          placeholder={"Faça uma breve descrição sobre o evento"}
        />
        <SubmitInput id={"botaoCriarGrupo"} text={"Criar Grupo"} />
      </form>
    </div>
  );
}

export default CriarGrupoForm;
