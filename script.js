'use strict';

const Person = function (name, cgpa) {
  this.name = name;
  this.cgpa = cgpa;
};
const info = new Person('joy', 3.97);
console.log(info);
