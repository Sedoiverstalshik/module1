'use strict'; 

{
  const product = 'book';
  const count = 5;
  const category = 'history';
  const price = 500;

  console.log(product); //выводим наименование товара
  console.log(count * price); //общая сумма товара
}
{
  const product = 'Машинка на пульте управления';
  const count = 3;
  const category = 'Игрушки';
  const price = 3500;

  console.log(product); //выводим наименование товара
  console.log(count * price); //общая сумма товара
}
{
  const product = prompt('Наименование товара'); //Наименование товара

  console.log('product: ', typeof product); //выводим наименование товара

  const count = +prompt('Количество товара'); //Количество товара и приводим к числу

  console.log('count: ', typeof count); //выводим количество товара

  const category = prompt('Категория товара'); //категория товара

  console.log('category: ', typeof category); //выводим категорию товара

  const price = +prompt('Цена товара'); //цена товара и приводим к числу

  console.log('price: ', typeof price);//выводим цену товара

  console.log(`На складе ${count} единицы товара "${product}" на сумму ${count * price} деревянных`);
}
