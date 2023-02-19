'use strict'; 

const getConverter = (euro, dollar = 64) => {
  const rub = (euro * 1.2) * dollar; //получаем рубли
  return rub;
  };

const result = getConverter(1);
console.log('result: ', result); //выводим результат в рублях



  