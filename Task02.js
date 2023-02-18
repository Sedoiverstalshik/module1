'use strict';

const stringUpper= (str1) => {

  return str1[0].toUpperCase() + str1.slice(1).toLowerCase() ;
}

console.log(stringUpper('привет Мир'));