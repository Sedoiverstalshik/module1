'use strict';

const botNumber = Math.ceil(Math.random() * 100);
console.log('botNumber: ', botNumber);

const game = () => {
  const number = prompt('Введите число от 0 до 100');
  switch (true) {
    case number === null:
      alert('Игра окончена!');
      return;
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
      return alert('Правильно!');
  }
  game();
};

game();


// 2 задание
{
  const newArray = [0];
  const randomArray = (array) => {
    const sum = array.reduce((acc, item) => acc + item, 0);
    if (sum > 50) {
      return [...array];
    } else {
      return randomArray([...array, Math.floor(Math.random() * 11)]);
    }
  };
  console.log('newArray:', randomArray(newArray));
}
