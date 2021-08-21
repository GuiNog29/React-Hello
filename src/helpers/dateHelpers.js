export function getAgeFrom(birthDate) {
  if (!birthDate) {
    return '?';
  }

  const [birthYear, birthMonth, birthDay] = birthDate.split('-');

  const today = new Date();
  const todayDay = today.getDay();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear();

  const age = todayYear - parseInt(birthYear, 10);

  if (parseInt(birthMonth, 10) > todayMonth) {
    return age - 1;
  }

  if (
    parseInt(birthMonth, 10) === todayMonth &&
    parseInt(birthDay, 10) > todayDay
  ) {
    return age - 1;
  }

  return age;
}
