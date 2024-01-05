import Input from "../input.js";
import Form from "../form.js";

function Home() {
  return (
    <Form
      items={[
        {
          text: "nome teste",
          placeholder: "digite aqui",
          id: "teste",
          type: "text",
        },
        {
          text: "nome teste",
          placeholder: "digite aqui",
          id: "teste",
          type: "text",
        },
        {
          text: "nome teste",
          placeholder: "digite aqui",
          id: "teste",
          type: "text",
        },
      ]}
    />
  );
}

export default Home;
