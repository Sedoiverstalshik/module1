'use strict';

const calculate = (sumCart, count, promo = null) => {

  let price;

  switch (true) {

    case (count > 10):
      price = sumCart - (sumCart * 0.03);
      console.log('price1: ', price);
      return;

    case (sumCart >= 30000):
      price = sumCart - (sumCart - 30000) * 0.15;
      console.log('price2: ', price);
      return;

    case (promo === "METHED"):
      price = sumCart - sumCart * 0.2;
      console.log('price3: ', price);
      return;

    case( promo === "G3H2Z1" && sumCart >= 2000):
      price = sumCart - 500;
      console.log('price4: ', price);
      return;
  }

}
const res = calculate(42000, 2, );
console.log('res: ', res);
