'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents =['Сидоров', 'Смирнов', 'Попов'];

const filter = (a, b) => {

  const newArray = a.filter(item => !b.includes(item));
  
  return newArray;
}

const result = filter(allStudents, failedStudents);
console.log('result: ', result);
 



