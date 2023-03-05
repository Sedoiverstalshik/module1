'use strict';

{
  const randomNumberGenerator = (count, n, m, options = '') => {
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    const newArray = [];
    let i = 0;

    while(i < count) {
      let random = Math.floor(Math.random() * (max - min + 1) + min);
      i++;
      if((options === 'even' && (random % 2)) || (options === 'odd' && !(random % 2))) random++;
        newArray.push(random);

    }    
    return newArray;
  }

  const result = randomNumberGenerator(24, 10, 20, 'even');
  console.log('result: ', result);
}
