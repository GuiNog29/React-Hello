export default function DateInput({
  labelDescrition = 'Descrição do Label:',
  inputValue = '2021-08-19',
  onInputChange = null,
}) {

  function handleBirthDateChange({currentTarget}){
    const newValue = currentTarget.value;
    onInputChange(newValue);
  }


  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor="inputName">
        Digite sua data de nascimento:
      </label>
      <input
        autoFocus
        htmlFor="inputName"
        className="border p-1"
        type="date"
        value={inputValue}
        onChange={handleBirthDateChange}
      />
    </div>
  );
}
