'use strict';

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
 
  const sum = arr.reduce((x, y, arr) => {   //получаем общую сумму чека
    return x + y;
  }, 0);
  const result = sum / arr.length; //получаем среднюю сумму чека
  return Number(Math.floor(result)); //приводим к числу и округляем в меньшую сторону
}


const total = getAverageValue(allСashbox);
console.log('total: ', total);