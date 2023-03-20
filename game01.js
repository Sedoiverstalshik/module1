'use strict';

let number = '';
const botNumber = Math.ceil(Math.random() * 100);
console.log('botNumber: ', botNumber);

const game = () => {
  if (number !== null && +number !== 100) {
    number = prompt('Введите число от 0 до 100');
  }
  if (isNaN(number) || +number < 1 || +number > 100) {
    alert('Вы ввели не число');
    game();
  }
  if (number < botNumber) {
    pluse(number);
  }
  if (number > botNumber) {
    minus(number);
  } else {
    alert('Правильно!');
  }
};

const pluse = (number) => {
  const pluse = alert('Больше!');
  game(number = pluse);
};

const minus = (number) => {
  const minus = alert('Меньше!');
  game(number = minus);
};
game();
// while (number !== null && +number !== 100) {
//   number = prompt('Введите число от 0 до 100')
//   switch (true) {
//     case number === null:
//       alert('Игра окончена!');
//       break;

//     case isNaN(number):
//     case +number < 1:
//     case +number > 100:
//       alert('Вы ввели не число');
//       break;

//     case +number > botNumber:
//       alert('Меньше!');
//       break;

//     case +number < botNumber:
//       alert('Больше!');
//       break;

//     default:
//       alert('Правильно!');
//   }
// }

