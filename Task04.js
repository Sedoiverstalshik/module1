'use strict';

const getPrice = (sumCart, discount) => sumCart - discount; //получаем сумму после применения скидок

const calculate = (sumCart, count, promo = null) => {

  if(count > 10) {
    const discount = (sumCart / 100) * 3; //получаем скидку
    return getPrice(sumCart, discount); //выводим результат
  } else if(sumCart > 30000) {
    const discount = (sumCart - 30000) / 100 *15; //получаем скидку
    return getPrice(sumCart, discount); //выводим результат
  } else if(promo === "METHED") {
    const discount = (sumCart / 100) * 10; //получаем скидку
    return getPrice(sumCart, discount); //выводим результат
  } else if(promo === "G3H2Z1" && sumCart > 2000) {
    const discount = 500; //получаем скидку
    return getPrice(sumCart, discount); //выводим результат
  } else {
    return 'не хватает денег'
  }

}

console.log(calculate(1000, 5, "G3H2Z1"));