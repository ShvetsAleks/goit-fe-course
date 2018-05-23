/*
  Создайте объект кассира, который получает список продуктов и деньги, 
  подсчитывает общую стоимость продуктов, и в зависимости от того
  хватает денег или нет, уведомляет покупателя о результате.
*/

/*
  Есть заранее известная база данных товаров, 
  в формате "имя-товара":"цена за одну единицу"
*/

// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   chicken: 50,
//   pork: 80,
//   cheese: 60,
//   tea: 20,
//   candy: 25
// };

/* 
  Необходимо создать функцию-конструктор Cashier для объектов кассира,
  чтобы можно было создать сколько угодно кассиров.
  
  Поля объекта кассира: 
    - name - строка, имя, передается при вызове конструктора
    
    - products - объект база данных продуктов, передается при вызове конструктора
    
    - totalPrice - число, общая стоимость покупок текущего покупателя, всегда начинается с 0 
    
    - customerMoney - число, сумма введенная пользователем в prompt при запросе денег, всегда начинается с 0 
    
    - changeAmount - число, сдача, всегда начинается с 0
    
    - countTotalPrice(order) - метод, получает список покупок, считает общую сумму исходя из поля products
      
    - getCustomerMoney() - метод, при вызове показывает prompt, в котором указана общая сумма покупок из поля totalPrice. 
        Ожидает ввода пользователя и записывает результат ввода в поле customerMoney. Проверить что результат ввода 
        пользователя не меньше чем значения поля totalPrice. Просит покупателя ввести сумму до тех пор, пока не будет 
        введена корректная сумма - равная или больше чем totalPrice. Если пользователь нажмет Cancel, 
        то функция возвращает null.
        
    - countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
    
    - reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.
    
    - serve(order) - метод, вызывается при обслуживании пользователя. Получает order - список покупок пользователя, 
        вызывает метод countTotalPrice для подсчета общей суммы, getCustomerMoney для запроса денег покупателя, 
        countChange для подсчета сдачи при успешном вводе пользователя. При успешном обслуживании возвращает 
        строку `Спасибо за покупку, ваша сдача ${сдача}`, при неудачном 'Очень жаль, что-то пошло не так, приходите еще'.
        Вызывает метод reset при любом исходе обслуживания.
*/

// function Cashier(name, products) {
//   // код
//   // не забывайте о this при обращении к свойствам и методам будущего объекта
// }

/*
  В метод serve будут передаваться объекты следующего формата. "имя-продукта": "количество-единиц"
*/
// const order = {
//   bread: 2,
//   milk: 2,
//   apples: 1,
//   cheese: 1
// };

/*
  Ниже приведен пример использования.
*/

// const cashier = new Cashier('Mango', products);

// cashier.serve(order);
/*
  При вызове cashier.serve, countTotalPrice посчитает общую сумму равную 20+30+20+60, итого 130
  Далее выполнение идет по вышеописанному алгоритму.
*/

// ===============================Конструктор магазина=======================================

function Cashier(name, products) {
  this.name = name;
  this.products = products;
  let totalPrice = 0;
  let customerMoney = 0;
  let changeAmount = 0;

  this.countTotalPrice = function(order) {
    // let totalPrice = 0;
    for (let key in order) {
      const hasKey = order.hasOwnProperty(key);
      if (hasKey) {
        totalPrice = totalPrice + order[key] * this.products[key];
      }
    }
    return totalPrice;
  };

  this.getCustomerMoney = function(totalPrice) {
    // let customerMoney = 0;
    do {
      userInput = prompt(
        `Сумма к оплате ${totalPrice} грн. Внесите нужную сумму: `,
        ``
      );
      if (userInput) {
        let num = Number(userInput);
        if (num >= totalPrice) {
          customerMoney = num;
          return customerMoney;
        } else if (num < totalPrice) {
          alert(`Сумма к оплате ${totalPrice} грн. Внесите нужную сумму: `, ``);
        } else {
          alert(`Некоректно введеная сумма!`);
        }
      }
    } while (userInput !== null);
    return null;
  };

  this.countChange = function(customerMoney, totalPrice) {
    // let changeAmount = 0;
    changeAmount = customerMoney - totalPrice;
    return changeAmount;
  };

  this.reset = function() {
    let reset = (totalPrice = customerMoney = changeAmount = 0);
    return reset;
  };

  this.serve = function(order) {
    const totalPrice = this.countTotalPrice(order);
    const customerMoney = this.getCustomerMoney(totalPrice);

    if (customerMoney) {
      const changeAmount = this.countChange(customerMoney, totalPrice);
      alert(`Спасибо за покупку, ваша сдача ${changeAmount} грн!`);
      console.log("Сброс параметров в ноль: ", this.reset());
      return;
    } else {
      alert(`Очень жаль, что-то пошло не так, приходите еще!`);
    }
  };
}

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

const cashier = new Cashier("Mango", products);
cashier.serve(order);
