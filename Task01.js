'use strict'; 

const dollar = 64;
const euro = dollar / 1.2 ; //получаем курс евро

const getConverter = (euro) => {
  const rub = (euro * 1.2) * dollar; //получаем рубли
  return rub;
  };

const result = getConverter(1);
console.log('result: ', result); //выводим результат в рублях



  