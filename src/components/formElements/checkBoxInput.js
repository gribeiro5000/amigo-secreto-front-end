function CheckBox({type, id, name, value, text}) {
  return (
    <div>
      <input type={type} id={id} name={name} value={value} />
      <label for={id}>{text}</label>
    </div>
  );
}

export default CheckBox;
