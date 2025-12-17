const users = [
  { id: 1, name: 'Ivan', age: 25, active: true, salary: 1000 },
  { id: 2, name: 'Anna', age: 30, active: false, salary: 1500 },
  { id: 3, name: 'Oleh', age: 22, active: true, salary: 800 },
  { id: 4, name: 'Maria', age: 28, active: true, salary: 2000 },
  { id: 5, name: 'Petro', age: 35, active: false, salary: 1200 },
];
console.log(users);

//  1 Сума зарплат усіх користувачів
console.log('Task 1');
const usersSalarySum = users.reduce((acc, user) => {
  acc += user.salary;
  return acc;
}, 0);
console.log('Сума зарплат усіх користувачів: ', usersSalarySum);

// 2 Сума зарплат активних користувачів
console.log('Task 2');
let activeUsersSalarySum1 = 0;
users
  .filter(user => user.active)
  .forEach(user => {
    activeUsersSalarySum1 += user.salary;
  });
console.log('Сума зарплат усіх активних користувачів: ', activeUsersSalarySum1);

// 3 Кількість користувачів (через reduce)
console.log('Task 3');
const numberOfUsers = users.reduce((acc, user) => {
  return acc + 1;
}, 0);
console.log('Кількість користувачів: ', numberOfUsers);

//4 Середній вік користувачів
console.log('Task 4');
const middleAges =
  users.reduce((acc, user) => acc + user.age, 0) /
  users.reduce((acc, user) => acc + 1, 0);
console.log('Середній вік користувачів: ', middleAges);

// 5 Об’єкт відповідності id → name
console.log('Task 5');
const objectOfUsers = users.reduce((acc, user) => {
  if (!acc[user.id]) {
    acc[user.id] = user.name;
  }
  return acc;
}, {});
console.log('Об’єкт відповідності id → name: ', objectOfUsers);

// 6 Кількість активних та неактивних
console.log('Task 6');
const objectOfActive = users.reduce(
  (acc, user) => {
    if (user.active) {
      acc.active += 1;
    } else {
      acc.inactive += 1;
    }
    return acc;
  },
  { active: 0, inactive: 0 }
);
console.log('Кількість активних та неактивних ', objectOfActive);

// 7 Користувач з найбільшою зарплатою
console.log('Task 7');
const userWithMaxSalary = users.reduce((acc, user, index) => {
  if (index == 0) {
    acc = user;
  }
  if (acc.salary < user.salary) {
    acc = user;
  }
  return acc;
}, {});
console.log('Користувач з найбільшою зарплатою ', userWithMaxSalary);

// 8 Сума зарплат за віковими групами
console.log('Task 8');
const objectOfSalaries = users.reduce(
  (acc, user) => {
    if (user.age < 30) {
      acc.young += user.salary;
    } else {
      acc.adult += user.salary;
    }
    return acc;
  },
  { young: 0, adult: 0 }
);
console.log('Сума зарплат за віковими групами ', objectOfSalaries);

// 9 Довжини імен активних користувачів
console.log('Task 9');
const lenghtOfActiveNames = users.reduce((acc, user) => {
  if (user.active) {
    acc.push(user.name.length);
  }
  return acc;
}, []);
console.log('Довжини імен активних користувачів ', lenghtOfActiveNames);

// 10 Форматування даних
console.log('Task 10');
const formattingUsers = users.reduce((acc, user) => {
  acc.push(`${user.name} (${user.salary})`);
  return acc;
}, []);
console.log('Форматування даних', formattingUsers);

// 11 Сума зарплат активних користувачів (тільки reduce)
console.log('Task 11');
const activeUsersSalarySum = users.reduce((acc, user) => {
  if (user.active) {
    acc += user.salary;
  }
  return acc;
}, 0);
console.log(
  'Сума зарплат активних користувачів (тільки reduce): ',
  activeUsersSalarySum
);

// 12 Перевірка активності (every)
console.log('Task 12');
const allActiveUsers = users.every(user => user.active);
console.log('Перевірка активності (every)', allActiveUsers);

// 13 Перевірка повноліття (every)
console.log('Task 13');
const allAdultsUsers = users.every(user => user.age >= 18);
console.log('Перевірка повноліття (every)', allAdultsUsers);

// 14 Сортування за віком
console.log('Task 14');
const sortedUsersforAge = users.toSorted((a, b) => a.age - b.age);
console.log('Сортування за віком', sortedUsersforAge);

// 15 Сортування активних за зарплатою
console.log('Task 14');
const sortedActiveUsersforSalary = users
  .filter(user => user.active)
  .toSorted((a, b) => b.salary - a.salary);
console.log('Сортування активних за зарплатою', sortedActiveUsersforSalary);
