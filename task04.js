'use strict';

{
  const leapYear = (n, m) => {

    const newArray = [];

    for(let num = n; num < m; num++) {
      if(!(num % 4) && (num % 100) && ((num % 400))) {
        newArray.push(num);
      }
    }
    return newArray;
  }

  const result = leapYear(2000, 2024);
  console.log('result: ', result);
}