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
  const arrN = [2, 6, 3, 7, 3, 7, 5, 4, 10, 5, 7];
  console.log('arrN: ', arrN);

  let sum = 0;
  const randomArray = (array) => {
    let arrayNumbers = [];
    if (array) {
      arrayNumbers = array.map((item) => sum += item);
      console.log('arrayNumbers1: ', arrayNumbers);
      console.log('sum1: ', sum);
    }
    if (sum > 50) {
      return arrayNumbers;
    }
    const randomNumber = Math.floor(Math.random() * 11);
    console.log('randomNumber: ', randomNumber);
    arrayNumbers.push(randomNumber);
    sum += randomNumber;
    console.log('sum2: ', sum);
    if (sum < 50) {
      console.log('arrayNumbers3: ', arrayNumbers);
      randomArray();
    }
    console.log('arrayNumbers4: ', arrayNumbers);
  };

  randomArray();
}


// let arrayNumbers = [];
//     const randomNumber = Math.floor(Math.random() * 11);
//     console.log('randomNumber: ', randomNumber);
//     switch (true) {
//       case (array && sum > 50):
//         arrayNumbers = array.map((item) => sum += item);
//         console.log('arrayNumbers1: ', arrayNumbers);
//         return arrayNumbers;
//       case (sum < 50):
//         arrayNumbers.push(randomNumber);
//         sum += randomNumber;
//         console.log('sum: ', sum);
//         console.log('arrayNumbers2: ', arrayNumbers);
//         randomArray();
//       case (sum > 50):
//         return arrayNumbers;
//     }
