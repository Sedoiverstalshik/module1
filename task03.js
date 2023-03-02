'use strict';

{
  const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (array, pref) => {

  const prefix = [];

  for(const elem of array ) {           //перебираем массив и добавляем префикс
    prefix.push(`${pref} ${elem}`);
  }
  return prefix;
}

const result = addPrefix(names, 'Mr');
console.log('result: ', result);
}
