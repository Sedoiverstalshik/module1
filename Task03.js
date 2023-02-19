'use strict';

const stringReverse = str => str.split("").reverse().join("");
  /*
  строку преобразуем в массив str.split(""), меняем направление текста .reverse(), 
  преобразуем из массива в строку .join("")
  */

console.log(stringReverse('Привет мир'));


