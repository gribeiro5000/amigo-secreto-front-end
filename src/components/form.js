import Input from "./input.js";
import SubmitButton from "./submitButton.js";
import Button from "./button.js";
import CheckBox from "./checkBox.js";

function Form(props) {
  const inputList = props.items.map((item, index) => {
    switch (item.element) {
      case "input":
        return (
          <Input
            key={index}
            text={item.text}
            placeholder={item.placeholder}
            id={item.id}
            type={item.type}
          />
        );
      case "h1":
        return <h1>{item.text}</h1>;
      case "submit":
        return <SubmitButton value={item.value} />;
      case "p":
        return <p>{item.text}</p>;
      case "button":
        return <Button value={item.value} />;
      case "checkbox":
        return (
          <CheckBox
            text={item.text}
            name={item.name}
            id={item.id}
            type={item.type}
            value={item.value}
          />
        );
      default:
        return "Elemento não encontrado";
    }
  });

  return (
    <div>
      <form>{inputList}</form>;
    </div>
  );
}

export default Form;
