import { useEffect, useState } from 'react';
import DateInput from './components/DateInput';
import Header from './components/Header';
import { getAgeFrom } from './helpers/dateHelpers';
import Main from './components/Main';
import TextInput from './components/TextInput';
import { getNewId } from './services/idService';
import Timer from './components/Timer';
import CheckBox from './components/CheckBoxInput';

export default function App() {
  const [name, setName] = useState('Guilherme');
  const [birthDate, setbirthDate] = useState('1999-07-29');
  const [showTimer, setshowTimer] = useState(false);

  useEffect(() => {
    document.title = name;
  }, [name]);

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange(birthDate) {
    setbirthDate(birthDate);
  }
  function toggleShowTimer() {
    setshowTimer(currentShowTimer => !currentShowTimer);
  }

  return (
    <>
      <Header>React-Hello</Header>
      <Main>
        {showTimer && (
          <div className="text-right mt-1">
            <Timer />
          </div>
        )}

        <CheckBox
          labelDescrition="Mostrar cronômetro"
          onCheckBoxChange={toggleShowTimer}
        />

        <TextInput
          id={getNewId}
          labelDescrition="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
        />

        <DateInput
          id={getNewId}
          labelDescrition="Digite sua data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />

        <p>
          O seu nome é {name}, com {name.length} caracteres e você tem{' '}
          {getAgeFrom(birthDate)} anos
        </p>
      </Main>
    </>
  );
}
