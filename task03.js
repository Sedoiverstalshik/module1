'use strict';

{
  const randomNumberGenerator = (count, n, m, options = '') => {
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    const newArray = [];

    options = ['even', 'odd'].indexOf(options);
    while(newArray.length < count) {
      let random = Math.floor(Math.random() * (max - min + 1) + min);
      if(options === -1 || options === Math.abs(random % 2)) {
        newArray.push(random);
      }
    }    
    return newArray;
  }

  const result = randomNumberGenerator(24, 11, -11,'even');
  console.log('result: ', result);
}
