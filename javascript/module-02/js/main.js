// ========Сумма введенных чисел пользователем=========

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt(`Введите любое число:`, ``);
  if (userInput) {
    let num = Number(userInput);
    if (num == 0) {
      numbers.push(num);
    } else if (num) {
      numbers.push(num);
    } else {
      alert(`Было введено не число, попробуйте еще раз!`);
    }
  } else if (userInput !== null) {
    alert(`Было введено не число, попробуйте еще раз!`);
  }
} while (userInput !== null);

console.log(numbers);

for (let i = 0, max = numbers.length; i < max; i += 1) {
  total = total + numbers[i];
}

alert(`Общая сумма чисел равна ${total}`);
