'use strict';

const stringUpper= (str) => {

  const newStr = str.trim().toLowerCase(); 
  return newStr[0].toUpperCase() + newStr.slice(1);
}

console.log(stringUpper('привет Мир'));