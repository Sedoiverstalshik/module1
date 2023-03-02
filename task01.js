'use strict';

{
  const randomNumberGenerator = (count) => {
    const newArray = [];
    for(let i = 0; i < count; i++) {
      newArray.push(Math.ceil(Math.random() * 100));
    }
    return newArray;
  }
  
  const result = randomNumberGenerator(10);
  console.log('result: ', result);
}