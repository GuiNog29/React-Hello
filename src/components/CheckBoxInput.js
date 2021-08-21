export default function CheckBoxInput({
  labelDescrition = 'Descrição do CheckBox:',
  inputValue = 'Valor padrão do input',
  onCheckBoxChange = null,
  id = 'id_input_checkbox',
  autoFocus = false,
}) {
  function handleTimerChange() {
    onCheckBoxChange();
  }

  return (
    <div className="flex items-center space-x-2  flex-row m y-4">
      <input
        autoFocus={autoFocus}
        id={id}
        className="border p-1"
        type="checkbox"
        value={inputValue}
        onChange={handleTimerChange}
      />

      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescrition}
      </label>
    </div>
  );
}
