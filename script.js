'use strict'; 

//задание 1
{
  const product = prompt('Наименование товара'); //Наименование товара
  const count = +prompt('Количество товара'); //Количество товара и приводим к числу
  const category = prompt('Категория товара'); //категория товара
  const price = +prompt('Цена товара'); //цена товара и приводим к числу

  if(Number.isInteger(count && price)){
    console.log(`На складе ${count} единицы товара "${product}" на сумму ${count * price} деревянных`);
  } else{
    console.log('Вы ввели некорректные данные');
  }
}


