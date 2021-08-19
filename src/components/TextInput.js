export default function TextInput({
  labelDescrition = 'Descrição do Label:',
  inputValue = 'Valor padrão do input',
  onInputChange = null,
}) {

  function handleNameChange({currentTarget}){
    const newValue = currentTarget.value;
    onInputChange(newValue);
  }


  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor="inputName">
        Digite seu nome:
      </label>
      <input
        autoFocus
        htmlFor="inputName"
        className="border p-1"
        type="text"
        value={inputValue}
        onChange={handleNameChange}
      />
    </div>
  );
}
