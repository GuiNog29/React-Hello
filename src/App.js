import { useEffect, useState } from 'react';
import DateInput from './components/DateInput.jsx';
import Header from './components/Header.jsx';
import { getAgeFrom } from './helpers/dateHelpers';
import Main from './components/Main.jsx';
import TextInput from './components/TextInput.jsx';
import { getNewId } from './services/idService';
import Timer from './components/Timer.jsx';
import CheckBox from './components/CheckBoxInput.jsx';
import OnlineOffline from './components/OnlineOffline.jsx';

export default function App() {
  const [name, setName] = useState('Guilherme');
  const [birthDate, setbirthDate] = useState('1999-07-29');
  const [showTimer, setshowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toggleIsOnline() {
      setIsOnline(true);
    }

    function toggleIsOffline() {
      setIsOnline(false);
    }

    window.addEventListener('online', toggleIsOnline);
    window.addEventListener('offline', toggleIsOffline);

    return () => {
      window.removeEventListener('online', toggleIsOnline);
      window.removeEventListener('offline', toggleIsOffline);
    };
  }, []);

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
      <Header>React - Hello</Header>
      <Main>
        <OnlineOffline isOnline={isOnline} />

        {showTimer && (
          <div className="text-right mt-3">
            <Timer />
          </div>
        )}

        <CheckBox
          labelDescrition="Show Timer"
          onCheckBoxChange={toggleShowTimer}
        />

        <TextInput
          id={getNewId}
          labelDescrition="Type you name:"
          inputValue={name}
          onInputChange={handleNameChange}
        />

        <DateInput
          id={getNewId}
          labelDescrition="Enter your birth date:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />

        <p>
          Your name is {name}, with {name.length} characters and you are{' '}
          {getAgeFrom(birthDate)} years old
        </p>
      </Main>
    </>
  );
}
