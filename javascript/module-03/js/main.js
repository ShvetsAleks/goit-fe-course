// ==================Получить пароль от пользователя и проверить на совпадение с базой==================
/*
  Есть массив logins с логинами пользователей.
  Написать функцию, addLogin(logins, login) которая:
    1) Получает новый логин и массив всех логинов как аргументы
  
    2) Проверяет валидность логина используя вспомогательную 
       функцию checkLoginValidity(login), которая проверяет 
       количество символов логина и возвращает true если логин 
       подходит под условие длины от 4-х до 16-ти символов 
       включительно, и false если не подходит
    3) Если логин не валиден, прекратить исполнение функции addLogin 
       и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    4) Если логин валиден, функция addLogin проверяеть уникальность 
       логина с помощью функции checkIfLoginExists(logins, login), 
       которая проверяет наличие логина в массиве logins, возвращая 
       false если такого логина в массиве еще нет, и true если есть
     
    5) Если checkIfLoginExists вернет false, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    
    6) Если checkIfLoginExists вернет true, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
       
    Принцип единственной ответственности функции:
    - checkIfLoginExists только проверяет есть ли такой логин и возвращает true или false. Больше ничего не делает.
    - checkLoginValidity только проверяет  валидный ли логин и возвращает true или false. Больше ничего не делает.
    - addLogin вызывает обе функции и по результату их работы или добавляет логин в logins или нет, 
      возвращая строки указанные в пунктах 5 и 6. Больше ничего не делает.
*/

const addLogin = function(logins, login) {
  if (login === null) return;

  if (checkLoginValidity(login)) {
    if (checkIfLoginExists(logins, login)) {
      return alert(`Такой логин уже используется!`);
    } else {
      logins.push(login);
      return alert(`Логин успешно добавлен!`);
    }
  } else {
    return alert(`Ошибка! Логин должен быть от 4 до 16 символов!`);
  }
};

const checkLoginValidity = function(login) {
  let lenghtLogin = false;
  if (login.length >= 4 && login.length <= 16) {
    lenghtLogin = true;
  }
  return lenghtLogin;
};

const checkIfLoginExists = function(logins, login) {
  let hasLoginArr = logins.includes(login);
  return hasLoginArr;
};

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const login = prompt(`Введите, пожалуйста, логин: `, ``);
addLogin(logins, login);
