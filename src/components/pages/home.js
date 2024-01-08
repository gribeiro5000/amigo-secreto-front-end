import Form from "../form.js";

function Home() {
  return (
    <div>
      <Form
        items={[
          {
            element: "h1",
            text: "Login",
          },
          {
            element: "input",
            text: "Digite seu E-mail",
            placeholder: "E-mail",
            id: "email",
            type: "text",
          },
          {
            element: "input",
            text: "Digite sua Senha",
            placeholder: "Senha",
            id: "senha",
            type: "text",
          },
          {
            element: "submit",
            value: "Entrar",
          },
        ]}
        buttonItems={{value: "Enviar"}}
      />
    </div>
  );
}

export default Home;
