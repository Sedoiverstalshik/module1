'use strict'; 

//задание 2
{
const rain = Math.round(Math.random() * 1);

if(rain === 1){
  console.log('Пошёл дождь. Возьмите зонт!');
} else{
  console.log('Дождя нет!');
}
}


// задание 3
{
const mathScore = +prompt('Введите кол-во баллов по математике:');
const russianScore = +prompt('Введите кол-во баллов по русскому языку:');
const informaticsScore = +prompt('Введите кол-во баллов по информатике:');
const sum = mathScore + russianScore + informaticsScore;//суммируем балы
const res = (sum >= 265) ? 'Поздравляю, вы поступили на бюджет!' : 'Приходите в следующем году!';
console.log('res: ', res);
}


// задание 4
{
const money = +prompt('Сколько денег вы хочете снять');
const result = (money >= 100 && money % 100 == 0) ? 'Одобрено, не забудьте чек!' : 'Банкомат может выдать сумму кратную 100 рублям!!!';
console.log('result: ', result);
}