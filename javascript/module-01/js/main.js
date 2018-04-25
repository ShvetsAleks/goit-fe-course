// ========Турагенство=========

const userInput = Number(
  prompt(`Добрый день! Введите количество мест для Вашей группы: `, ``)
);

const isValidInput = userInput > 0 && Number.isInteger(userInput);

if (isValidInput) {
  const taba = 6;
  const sharm = 15;
  const hurgada = 25;

  if (userInput <= taba) {
    const groupTourist = confirm(
      `Есть места в группе taba. Вы согласны быть в этой группе?`
    );
    if (groupTourist) {
      const taba = 6 - Number(userInput);
      console.log(taba);
      alert(`Приятного путешествия в группе taba!`);
    } else {
      alert(`Нам очень жаль, приходите еще!`);
    }
  } else if (userInput <= sharm) {
    const groupTourist = confirm(
      `Есть места в группе sharm. Вы согласны быть в этой группе?`
    );
    if (groupTourist) {
      const sharm = 15 - Number(userInput);
      console.log(sharm);
      alert(`Приятного путешествия в группе sharm!`);
    } else {
      alert(`Нам очень жаль, приходите еще!`);
    }
  } else if (userInput <= hurgada) {
    const groupTourist = confirm(
      `Есть места в группе hurgada. Вы согласны быть в этой группе?`
    );
    if (groupTourist) {
      const hurgada = 25 - Number(userInput);
      console.log(hurgada);
      alert(`Приятного путешествия в группе hurgada!`);
    } else {
      alert(`Нам очень жаль, приходите еще!`);
    }
  } else {
    alert(`Извените, мест нет!`);
  }
} else {
  alert(`Ошибка ввода!`);
}
