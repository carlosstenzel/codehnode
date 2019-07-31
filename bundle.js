"use strict";

var arr = [1, 3, 4, 5, 6, 8, 9];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return {
    nome: 'Carlos'
  };
};

console.log(teste());
