'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (array, pref) => {

  for(const elem of array ) {           //перебираем массив и добавляем префикс
    console.log(`${pref} ${elem}`);
  }
}

addPrefix(names, 'Mr');
