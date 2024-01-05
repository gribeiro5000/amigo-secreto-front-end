import Input from "./input.js";

function Form(props) {
  const inputList = props.items.map((item, index) => (
    <Input
      key={index}
      text={item.text}
      placeholder={item.placeholder}
      id={item.id}
      type={item.type}
    />
  ));

  return (
    <div>
      <form>{inputList}</form>;
    </div>
  );
}

export default Form;
