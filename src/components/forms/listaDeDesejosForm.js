import TextInput from "../formElements/textInput.js";
import SubmitInput from "../formElements/submitInput.js";

import styles from "./listaDeDesejosForm.module.css";

function ListaDeDesejosForm() {
  return (
    <div className={styles.ListaDeDesejosForm}>
      <form>
        <h1>Lista de Desejos</h1>
        <TextInput
          text={"Grupo (*)"}
          id={"grupo"}
          placeholder={"Nome do grupo"}
        />
        <TextInput text={"Nome (*)"} id={"nome"} placeholder={"Nome do item"} />
        <TextInput
          text={"Preço Estimado"}
          id={"preco"}
          placeholder={"Preço do item"}
        />
        <TextInput text={"Link do produto"} id={"link"} placeholder={"link"} />
        <SubmitInput id={"botaoAdicionarItem"} text={"Adicionar Item"} />
      </form>
    </div>
  );
}

export default ListaDeDesejosForm;
