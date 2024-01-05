import Input from "./input.js";

function Form(props) {
  return (
    <div>
      <Input inputs={props.inputs} />
    </div>
  );
}

export default Form;
