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
    cart.calculateItemPrice();
  },

  increaseCount(num) {
    cart.count += num;
  },
  
  calculateItemPrice() {
    cart.totalPrice = cart.items.reduce((acc, item) => {
      return acc + item.productPrice * item.productCount;
    }, 0);
  },  
  
  clear() {
    cart.items = [];
    cart.totalPrice = 0;
    cart.count = 0;
  },
  
  print() {
    console.log(JSON.stringify(cart.items));
    console.log(`Общая стоимость корзины ${cart.totalPrice}`);
  },
};

cart.add('соль', 40, 1);
cart.add('сахар', 60, 2);
cart.add('молоко', 40, 1);
// console.log('items: ', cart.items);
// console.log('totalPrice: ', cart.totalPrice);
// console.log('count: ', cart.count);
cart.print();

