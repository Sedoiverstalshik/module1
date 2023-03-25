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
  if (+number < botNumber) {
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


// 2 задание

{
  const arrayNumbers = [];
  let sum = 0;
  const randomArray = () => {
    const randomNumber = Math.floor(Math.random() * 11);
    arrayNumbers.push(randomNumber);
    sum += randomNumber;
    if (sum > 50) {
      return arrayNumbers;
    } else {
      randomArray();
    }
  };

  randomArray();
  console.log('arrayNumbers: ', arrayNumbers);
}
