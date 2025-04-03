// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 

fetch('https://jsonplaceholder.typicode.com/users')
  .then(r => r.json())
  .then(users => users.forEach(u => {
    document.querySelector('.usersList').innerHTML += `<li>${u.name}</li>`;
  }));