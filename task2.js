// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

let input = document.getElementById('userNameInput');
let button = document.getElementById('getUserButton');
let userCity = document.getElementById('userCity');

button.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .then(users => {
      const user = users.find(u => u.name.toLowerCase() === input.value.trim().toLowerCase());
      userCity.textContent = user ? `Місто: ${user.address.city}` : 'Користувач не знайдений';
    });
});