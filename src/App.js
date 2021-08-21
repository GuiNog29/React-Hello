import { useEffect, useState } from 'react';
import DateInput from './components/DateInput';
import Header from './components/Header';
import { getAgeFrom } from './helpers/dateHelpers';
import Main from './components/Main';
import TextInput from './components/TextInput';
import { getNewId } from './services/idService';

export default function App() {
  const [name, setName] = useState('Guilherme');
  const [birthDate, setbirthDate] = useState('1999-07-29');

  useEffect(() => {
    document.title = name;
  }, [name]);

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange(birthDate) {
    setbirthDate(birthDate);
  }

  return (
    <>
      <Header>React-Hello</Header>
      <Main>
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
