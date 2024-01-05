import Input from "./input.js";

function Form({items}) {
  const inputList = items.map((item, index) => {
    <Input
      text={item.text}
      placeholder={item.placeholder}
      id={item.id}
      type={item.type}
    />;
  });

  return <form>{inputList}</form>;
}

export default Form;
