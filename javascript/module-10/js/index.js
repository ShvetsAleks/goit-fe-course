"use strict";

// Получить всех пользователей
const usersLists = document.querySelector(".js-users");
const btnAllUSers = document.querySelector(".js-get_users");

const getAllUser = () => {
  const url = `https://test-users-api.herokuapp.com/users/`;

  return fetch(url)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error("error: " + response.statusText);
    })
    .then(data => data.data)
    .catch(err => console.log(err));
};

const createdLists = users => users.reduce((markup, item) => markup + `<li class = list-item> id: ${item.id}, name: ${item.name}, age: ${item.age} </li>`, ``);

const updateItems = users => {
  const markup = createdLists(users);
  usersLists.innerHTML = markup
};

const handleBtnClick = e => {
  e.preventDefault();
  getAllUser().then(updateItems);
}

btnAllUSers.addEventListener(`click`, handleBtnClick);

// Получить пользователя по ID

const userItem = document.querySelector(".js-users");
const formByID = document.querySelector(".js-get_user");
const inputByID = document.querySelector(".js-input_id");


const getUserById = (id) => {
  const url = `https://test-users-api.herokuapp.com/users/${id}/`;

 return fetch(url)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error("error: " + response.statusText);
    })
    .then(data => data.data)
    .catch(err => console.log(err));
}

const updateItem = ({id, name, age}) => {
  const markup = `<li class = list-item> id: ${id}, name: ${name}, age: ${age} </li>`;
  userItem.innerHTML = markup
};

const handleUserByID = e => {
  e.preventDefault();

  getUserById(inputByID.value).then(updateItem);
  
  e.target.reset();
}

formByID.addEventListener(`submit`, handleUserByID);


// добавить пользователя 

const formAddUser = document.querySelector(".js-add_user");
const inputName = document.querySelector(".js-input_name");
const inputAge = document.querySelector(".js-input_age");

const addUser = (name, age) => {
  const url = `https://test-users-api.herokuapp.com/users/`;
  const newUser = {
    name: name,
    age: age,
  }

 return fetch(url, {
   method: `POST`,
   body: JSON.stringify(newUser),
   headers: {
    "Content-type": "application/json"
  }
 })
    .then(response => {
      if (response.ok) return response.json();

      throw new Error("error: " + response.statusText);
    })
    .then(data => data.data)
    .catch(err => console.log(err));
}

const handleAddUser = e => {
  e.preventDefault();

  addUser(inputName.value, inputAge.value).then(user => {
    console.log(user);
    alert(`Пользователь успешно добавлен. ID: ${user[`_id`]}`)
  })
  
  e.target.reset();
}

formAddUser.addEventListener(`submit`, handleAddUser);

// удалить пользователя 

const formDeleteUser = document.querySelector(".js-delete_user");
const deleteByID = document.querySelector(".js-delete_id");

const removeUser = (id) => {
  const url = `https://test-users-api.herokuapp.com/users/${id}/`;

 return fetch(url, {
   method: 'DELETE',
 })
 .catch(err => console.log(err));
}

const handleDeleteUser = e => {
  e.preventDefault();

  removeUser(deleteByID.value).then( () => {
    console.log(`succes`);
    alert(`Пользователь успешно удален.`)
  })
  
  e.target.reset();
}

formDeleteUser.addEventListener(`submit`, handleDeleteUser);

// обновить пользователь по ID

const formUpdateUser = document.querySelector(".js-update_user");
const updateName = document.querySelector(".js-update_name");
const updateAge = document.querySelector(".js-update_age");
const updateId = document.querySelector(".js-update_id");

const updateUser = (id, name, age) => {
  const url = `https://test-users-api.herokuapp.com/users/${id}/`;
  const upUser = {
    name: name,
    age: age,
  }

 return fetch(url, {
   method: `PUT`,
   body: JSON.stringify(upUser),
   headers: {
    "Content-type": "application/json"
  }
 })
    .then(response => {
      if (response.ok) return response.json();

      throw new Error("error: " + response.statusText);
    })
    .then(data => data.data)
    .catch(err => console.log(err));
}

const handleUpdateUser = e => {
  e.preventDefault();

  updateUser(updateId.value, updateName.value, updateAge.value).then(user => {
    console.log(user);
    alert(`Пользователь c ID: ${user[`id`]} успешно обновлен с параметрами: name - ${user[`name`]}, age - ${user[`age`]}`)
  })
  
  e.target.reset();
}

formUpdateUser.addEventListener(`submit`, handleUpdateUser);





