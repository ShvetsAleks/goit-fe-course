"use strict";

/*Модуль 5 - Домашнее задание
  
Создайте менеджер управления данными аккаунтов пользователей соцсети SocialBook.
  
  ОБЯЗАТЕЛЬНО ПРИ ВЫПОЛНЕНИИ: 
    - написать функцию-конструктор создающую объект со свойствами и методами
    - при работе с коллекциями данных использовать функциональные методы массивов, никаких for и т. п.
  
  Для создания объекта используйте функцию-конструктор, принимающую следующие параметры:
    - users - массив пользователей. Каждый пользователь это объект с полями:
        id - уникальный идентификатор
        login - почта
        password - пароль
        isActive - статус активности
    - posts - объект с ключами равными id пользователя соцсети SocialBook. Значениями свойств 
      являются массивы постов пользователя. Каждый пост состоит из:
        id - уникальный идентификатор
        text - текст поста
        likes - количество лайков поста
*/

// function SocialBook (users = [], posts = {}) { ... }

// /*
//   Используйте следующий массив пользователей при создании экземпляра SocialBook
// */
// const initialUsers = [
//   { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
//   { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
//   { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
// ];

/*
  Используйте следующий объект постов пользователей при создании экземпляра SocialBook
*/
// const initialPosts = {
//   "-s19a6hqce": [
//     { id: "-5sgljaskg", text: "post #1", likes: 3 },
//     { id: "-199hb6igr", text: "post #2", likes: 5 },
//     { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
//   ],
//   "-qkpzenjxe": [
//     { id: "-5tu69g5rf", text: "post #1", likes: 8 },
//     { id: "-bje766393", text: "post #2", likes: 15 }
//   ],
//   "-e51cpd4di": [
//     { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
//     { id: "-i03pbhy3s", text: "post #2", likes: 45 }
//   ],
// };

/*
  Для создания уникального идентификатора для поля id, используйте 
  вспомогательную функцию getId(), возвращающую уникальную строку.
  
  К примеру: const user = { id: getId(), name: 'Mango' };
*/
// const getId = () => "-" + Math.random().toString(36).substr(2, 9);

/*
  Добавьте в SocialBook следующие методы для работы с пользователями:
    +- getAllUsers() - возвращает массив всех пользователей
    
    +- getUserByLogin(login) - ищет и возвращает объект пользователя с совпадающим логином
    
    +- getUserStatus(userId) - ищет пользователя по id и возвращает 'active' 
      если isActive true, в противном случае возвращает 'inactive'.
      
    +- addUser(user) - принимает объект user с полями email и password и добавляет 
      ему поля id(используя функцию getId) и isActive (false). Затем добавляет пользователя в 
      свойство users самого экземпляра.
          
    - removeUserById(userId) - удаляет пользователя из массива пользователей по полю id
    
    - getUsersCount() - возвращает общее количество пользователей
*/

/*
  ***ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - выполнять по желанию***
  Добавьте в SocialBook следующие методы для работы с постами пользователей:
    - getUserPosts(userId) - возвращает массив постов пользователя с id равным userId
    
    - addPost(userId, post) - добавляет post в поле posts объекта socialBook по ключу userId. 
    
    - removePost(userId, postId) - удаляет post с id равным postId из поля posts 
      объекта socialBook по ключу userId
      
    - getAllLikes(userId) - возвращает сумму всех полей likes постов пользователя с id равным userId
          
    - addPostLike(userId, postId) - увеличивает значение поля likes на 1 у поста с id равным postId, 
      для пользователя с id равным userId
    
    - getPostsCount(userId) - возвращает общее количество постов пользователя с id равным userId
*/

function SocialBook(users = [], post = {}) {
  this.users = users;
  this.post = post;

  this.getAllUsers = function(users) {
    return this.users;
  };

  this.getUserByLogin = function(login) {
    return this.users.find(user => user.login === login);
  };

  this.getUserStatus = function(userId) {
    const user = this.users.find(user => user.id === userId);
    return user.isActive ? "active" : "inactive";
  };

  this.addUser = function(user) {
    user.id = getId(),
    user.isActive = false,    
    users.push(user);
    return user
  };

  this.removeUserById = function (userId) {
    this.users = this.users.filter(user => user.id !== userId);
  };

  this.getUsersCount = function() {
    const arrUser =  this.users.map(user => user.login);
    return arrUser.length;
  }; 

}

const initialUsers = [
  {
    id: "-s19a6hqce",
    login: "mangozedog@mail.com",
    password: "qwe123zv",
    isActive: true
  },
  {
    id: "-qkpzenjxe",
    login: "polysweet@skynet.ze",
    password: "123zxc78",
    isActive: true
  },
  {
    id: "-e51cpd4di",
    login: "ajax2k@change.ua",
    password: "ert234qw",
    isActive: false
  }
];

const initialPosts = {
  "-s19a6hqce": [
    { id: "-5sgljaskg", text: "post #1", likes: 3 },
    { id: "-199hb6igr", text: "post #2", likes: 5 },
    { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
  ],
  "-qkpzenjxe": [
    { id: "-5tu69g5rf", text: "post #1", likes: 8 },
    { id: "-bje766393", text: "post #2", likes: 15 }
  ],
  "-e51cpd4di": [
    { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
    { id: "-i03pbhy3s", text: "post #2", likes: 45 }
  ]
};

const getId = () => "-" + Math.random().toString(36).substr(2, 9);
const usersBooks = new SocialBook(initialUsers, initialPosts);

const socialUsers = usersBooks.getAllUsers(initialUsers);
console.log(socialUsers);

const user = usersBooks.getUserByLogin("mangozedog@mail.com");
console.log(user);

const newUser = usersBooks.addUser({login: "zedog@mail.com", password: "qwe1zv"});
const User = usersBooks.removeUserById("-s19a6hqce");

console.log(`общее количество пользователей: `, usersBooks.getUsersCount());

console.log(usersBooks);
