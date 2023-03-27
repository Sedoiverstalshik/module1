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

// game();


// 2 задание

{
  const arrN = [2, 6, 3, 5, 6, 7, 3, 1];
  console.log('arrN: ', arrN);

  let sum = 0;
  const randomArray = (array) => {
    let arrayNumbers = [];
    const randomNumber = Math.floor(Math.random() * 11);
    console.log('randomNumber: ', randomNumber);
    // arrayNumbers.push(randomNumber);
    // arrayNumbers = array;
    sum += randomNumber;
    console.log('sum: ', sum);
    if (array) {
      arrayNumbers = array.map((item) => sum += item);
      console.log('sum2: ', sum);
      // arrayNumbers.push();
    }
    console.log('arrayNumbers1: ', arrayNumbers);
    if (sum > 50) {
      return arrayNumbers;
    } else {
      // arrayNumbers.push(array);
      randomArray();
    }
    console.log('arrayNumbers: ', arrayNumbers);
  };

  randomArray(arrN);
}

