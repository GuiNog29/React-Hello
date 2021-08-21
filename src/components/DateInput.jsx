export default function DateInput({
  labelDescrition = 'Description of Label:',
  inputValue = '2021-08-19',
  onInputChange = null,
  id = 'id_input_Date',
  autoFocus = false,
}) {
  function handleBirthDateChange({ currentTarget }) {
    const newValue = currentTarget.value;
    onInputChange(newValue);
  }

  return (
    <div className="flex flex-col my-4">
      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescrition}
      </label>
      <input
        id={id}
        autoFocus={autoFocus}
        htmlFor={id}
        className="border p-1"
        type="date"
        value={inputValue}
        onChange={handleBirthDateChange}
      />
    </div>
  );
}
