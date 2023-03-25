'use strict';

// Задание 1

{
  const rectangle = {
    width: 5,
    height: 5,
    get perimeter() {
      return (this.width + this.height) * 2 + 'см';
    },
    get square() {
      return this.width * this.height + 'см';
    },
    set widths(value1) {
      if (typeof value1 === 'number') {
        this.width = value1;
      }
    },
    set heights(value2) {
      if (typeof value2 === 'number') {
        this.height = value2;
      }
    },
  };

  // rectangle.widths = 55;
  // rectangle.heights = 15;
  // console.log('rectangle.perimeter: ', rectangle.perimeter);
  // console.log('rectangle.square: ', rectangle.square);
  console.log('rectangle: ', rectangle);
}


// Задание 2

{
  const cart = {
    items: [],
    count: 0,
    discount: 0,
    get totalPrice() {
      if (this.discount) {
        return this.calculateItemPrice() - ((this
          .calculateItemPrice() / 100) * this.discount);
      }
      return this.calculateItemPrice();
    },
    set setDiscount(promocode) {
      if (promocode === 'METHED') {
        this.discount = 15;
      }
      if (promocode === 'NEWYEAR') {
        this.discount = 21;
      }
    },
    add(productName, productPrice, productCount) {
      this.items.push({productName, productPrice, productCount});
      this.increaseCount(productCount);
    },
    increaseCount(num) {
      this.count += num;
    },
    calculateItemPrice() {
      return this.items
        .reduce((acc, item) => acc + item.productPrice * item.productCount, 0);
    },
    clear() {
      this.items = [];
      this.totalPrice = 0;
      this.count = 0;
    },
    print() {
      console.log(JSON.stringify(this.items));
      console.log(`Общая стоимость корзины ${this.totalPrice}`);
    },
  };

  cart.add('соль', 40, 3);
  cart.add('сахар', 60, 3);
  cart.add('молоко', 40, 1);
  // console.log(cart.setDiscount = 'NEWYEAR');
  console.log('discount: ', cart.discount);
  console.log('count: ', cart.count);
  cart.print();
  // console.log('items: ', cart.items);
  // console.log('totalPrice1: ', cart.totalPrice);
}
