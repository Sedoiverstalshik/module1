'use strict';

const calculate = (sumCart, count, promo = null) => {

  let price = sumCart;

  if(count > 10) {
    price *= 0.97;
  }

  if(sumCart > 30000) {
    price = (price - 30000) * 0.85 + 30000;
  }

  if(promo === "METHED") {
    price *= 0.9;
  }

  if(promo === "G3H2Z1" && sumCart > 2000) {
    price -= 500;
  }

  return price;
}
  const res = calculate(100000, 20, "METHED");
  console.log('res: ', res);

