export default function TextInput({
  labelDescrition = 'Descrição do Label:',
  inputValue = 'Valor padrão do input',
  onInputChange = null,
  id = 'id_input_Name',
  autoFocus,
}) {
  function handleNameChange({ currentTarget }) {
    const newValue = currentTarget.value;
    onInputChange(newValue);
  }

  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescrition}
      </label>

      <input
        autoFocus={autoFocus}
        id={id}
        className="border p-1"
        type="text"
        value={inputValue}
        onChange={handleNameChange}
      />
    </div>
  );
}
