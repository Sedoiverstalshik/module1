'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return cart.totalPrice;
  },

  add(productName, productPrice, productCount) {
    cart.items.push({productName, productPrice, productCount});
    cart.increaseCount(productCount);
    cart.calculateItemPrice(productPrice, productCount);
    cart.getTotalPrice();
  },

  increaseCount(num) {
    return cart.count += num;
  },
  
  calculateItemPrice(price, count) {
    cart.totalPrice = (price * count) +  cart.totalPrice;
    return cart.totalPrice; 
  },
  
  //возникли проблемы с очисткой корзины

  
  clear() {
    cart.items = [];
    cart.totalPrice = 0;
    cart.count = 0;
    cart.add();
  },

  print() {
    console.log(JSON.stringify(cart.items));
    console.log(`Общая стоимость корзины ${cart.totalPrice}`);
  },
};

// cart.clear();
cart.add('соль', 40, 2);
cart.add('сахар', 60, 2);
cart.add('молоко', 40, 1);
cart.add('сметана', 50, 3);
// console.log('items: ', cart.items);
// console.log('totalPrice: ', cart.totalPrice);
// console.log('count: ', cart.count);
cart.print();