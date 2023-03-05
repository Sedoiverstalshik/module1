'use strict';

{
  const randomNumberGenerator = (count, n, m) => {
    let min = n;
    let max = m;
    const newArray = [];
    for(let i = 0; i < count; i++) {
      newArray.push(Math.ceil(Math.random() * (max - min + 1) + min));
    }
    return newArray;
  }
  
  const result = randomNumberGenerator(15, 150, 10);
  console.log('result: ', result);
}