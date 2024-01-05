import Input from "../input.js";
import Form from "../form.js";

function Home() {
  return (
    <div>
      <Form
        inputs={[
          {titulo: "teste", placeholder: "teste"},
          {titulo: "teste2", placeholder: "teste2"},
          {titulo: "teste3", placeholder: "teste3"},
        ]}
      />
    </div>
  );
}

export default Home;
