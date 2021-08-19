import { useState } from 'react';
import DateInput from './components/DateInput';
import Header from './components/Header';
import Main from './components/Main';
import TextInput from './components/TextInput';

export default function App() {
  const [name, setName] = useState('Guilherme');
  const [birthDate, setbirthDate] = useState('1999-07-29');

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
          labelDescrition="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
        />

        <DateInput
        labelDescrition="Digite sua data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />

        <p>
          O seu nome é {name}, com {name.length} caracteres e você tem 22 anos
        </p>
      </Main>
    </>
  );
}
