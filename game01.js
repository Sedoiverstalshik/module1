'use strict';

let number = '';
const botNumber = Math.ceil(Math.random() * 100);
console.log('botNumber: ', botNumber);

while (number !== null && +number !== 100) {
  number = prompt('Введите число от 0 до 100')
  switch (true) {
    case number === null:
      alert('Игра окончена!');
      break;

    case isNaN(number):
    case +number < 1:
    case +number > 100:
      alert('Вы ввели не число');
      break;

    case +number > botNumber:
      alert('Меньше!');
      break;

    case +number < botNumber:
      alert('Больше!');
      break;

    default:
      alert('Правильно!');
  }
}

