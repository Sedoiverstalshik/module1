'use strict';

const getPrice = (sumCart, discount) => sumCart - discount;

const calculate = (sumCart, count, promo = null) => {

  if(count > 10) {
    const discount = (sumCart / 100) * 3;
    return getPrice(sumCart, discount);
  } else if(sumCart > 30000) {
    const discount = (sumCart - 30000) / 100 *15;
    return getPrice(sumCart, discount);
  } else if(promo === "METHED") {
    const discount = (sumCart / 100) * 10;
    return getPrice(sumCart, discount);
  } else if(promo === "G3H2Z1" && sumCart > 2000) {
    const discount = 500;
    console.log('discount: ', discount);
    return getPrice(sumCart, discount);
  }

}

console.log(calculate(1000, 5, "G3H2Z1"));