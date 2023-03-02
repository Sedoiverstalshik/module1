'use strict';

{
  const randomNumberGenerator = (count, n, m, options = '') => {
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    const newArray = [];

    for(let i = 0; i < count; i++) {
      let random = Math.ceil(Math.random() * (max - min) + min);
      if((options === 'even' && random % 2 === 0)) {
        newArray.push(random);
      }
      if(options === 'odd' && !(random % 2)) {
        newArray.push(random + 1);
      }
    }
    return newArray;
  }
  
  const result = randomNumberGenerator(12, 1, 60, 'even');
  console.log('result: ', result);
}