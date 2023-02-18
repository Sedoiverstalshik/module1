'use strict';

const stringUpper= (str1) => {

  return str1[0].toUpperCase() + str1.slice(1).toLowerCase() ;
  /*
  первую букву через str1[0].toUpperCase() делаем заглавной, через str1.slice(1).toLowerCase() 
  добавляем остальной текст с маленькой буквы
  */
}

console.log(stringUpper('привет Мир'));