'use strict'; 

{
  const income = +prompt('Введите ваш доход');
  

  if(income < 15000){
    let sum = income - ((income / 100) * 13);
    let percent = income - sum;
    console.log('percent: ', `Сумма налога ${percent} рублей.`);
    
  } else if(income > 15000 && income < 50000){
    let sum = income - ((income / 100) * 20);
    let percent = income - sum;
    console.log('percent: ', `Сумма налога ${percent} рублей.`);
  } else if(income > 50000){
    let sum = income - ((income / 100) * 30);
    let percent = income - sum;
    console.log('percent: ', `Сумма налога ${percent} рублей.`);
  }
}