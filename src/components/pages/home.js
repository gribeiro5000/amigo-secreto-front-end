import Input from "../input.js";
import Form from "../form.js";

function Home() {
  return (
    <div>
      <Form
        items={[
          {
            text: "nathan",
            placeholder: "digite aqui",
            id: 1,
            type: "text",
          },
          {
            text: "Gabriel",
            placeholder: "digite aqui",
            id: 2,
            type: "text",
          },
          {
            text: "teste3",
            placeholder: "digite aqui",
            id: 3,
            type: "text",
          },
        ]}
      />
    </div>
  );
}

export default Home;
