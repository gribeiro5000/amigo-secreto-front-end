import TextInput from "../formElements/textInput.js";
import CheckboxInput from "../formElements/checkBoxInput.js";
import SubmitInput from "../formElements/submitInput.js";
import React, {useState} from "react";
import styles from "./cadastroForm.module.css";

function CadastroForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoDeSenha, setConfirmacaoDeSenha] = useState("");
  const [celular, setCelular] = useState("");
  const [politicaDePrivacidade, setPoliticaDePrivacidade] = useState(false);
  const [termosDeServico, setTermosDeServico] = useState(false);

  const handleChange = (event) => {
    const {id, value, type, checked} = event.target;

    switch (type) {
      case "checkbox":
        id === "politicaDePrivacidade"
          ? setPoliticaDePrivacidade(checked)
          : setTermosDeServico(checked);
        break;
      default:
        switch (id) {
          case "nome":
            setNome(value);
            break;
          case "email":
            setEmail(value);
            break;
          case "senha":
            setSenha(value);
            break;
          case "confirmacaoDeSenha":
            setConfirmacaoDeSenha(value);
            break;
          case "celular":
            setCelular(value);
            break;
          default:
            break;
        }
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se os campos obrigatórios foram preenchidos
    if (!nome || !email || !senha || !confirmacaoDeSenha) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmacaoDeSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    // Verifica se os termos e políticas foram aceitos
    if (!politicaDePrivacidade || !termosDeServico) {
      alert(
        "É necessário aceitar as Políticas de Privacidade e os Termos de Serviço.",
      );
      return;
    }

    const dados = {
      nome,
      email,
      senha,
      celular,
    };
    console.log(dados);

    try {
      // Envia os dados para a API
      const response = await fetch("http://localhost:5000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      // Verifica se a requisição foi bem-sucedida
      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário.");
      }

      // Limpa os campos após o sucesso
      setNome("");
      setEmail("");
      setSenha("");
      setConfirmacaoDeSenha("");
      setCelular("");
      setPoliticaDePrivacidade(false);
      setTermosDeServico(false);

      console.log("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error.message);
    }
  };

  return (
    <div className={styles.cadastroForm}>
      <form onSubmit={handleSubmit}>
        <h1>{"Cadastrar"}</h1>
        <TextInput
          text={"Nome Completo (*)"}
          id={"nome"}
          placeholder={"Nome"}
          onChange={handleChange}
        />

        <TextInput
          text={"Digite seu e-mail (*)"}
          id={"email"}
          placeholder={"E-mail"}
          onChange={handleChange}
        />
        <TextInput
          text={"Digite sua senha (*)"}
          id={"senha"}
          placeholder={"Senha"}
          onChange={handleChange}
        />
        <TextInput
          text={"Confirme sua senha (*)"}
          id={"confirmacaoDeSenha"}
          placeholder={"Senha"}
          onChange={handleChange}
        />
        <TextInput
          text={"Digite seu número de Celular"}
          id={"celular"}
          placeholder={"Celular"}
          onChange={handleChange}
        />
        <CheckboxInput
          id={"politicaDePrivacidade"}
          name={"politicaDePrivacidade"}
          value={"sim"}
          text={"Eu li e concordo com as Políticas de Privacidade"}
          onChange={handleChange}
        />
        <CheckboxInput
          id={"termosDeServiço"}
          name={"termosDeServiço"}
          value={"sim"}
          text={"Eu li e concordo com os Termos de Serviço"}
          onChange={handleChange}
        />
        <SubmitInput id={"botaoCadastrar"} text={"Cadastrar"} />
      </form>
    </div>
  );
}

export default CadastroForm;
