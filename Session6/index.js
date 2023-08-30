function myFunc(num) {
  num = num + 10;
  console.log(num);
}
let n = 10;
myFunc(n);
console.log(n);

function arrFunc(arr) {
  arr.push(37);
  console.log(arr);
}
let a = [1, 2];
let b = [...a];
arrFunc(b);
console.log(b);
console.log(a);
//=====================//

let arr = ['Rameo', 'Kevin', 'Zombie', 'Jacky', 'Adam'];
let i;
for (i = 1; i < n.length; i++) {
  if (arr[i - 1] == 'Zombie') {
    console.log(arr[i]);
  }
} console.log(arr[i]);
//============================//
//=========================//
let x = 1
function work() {
  let x = 2;
  console.log(x);
}
work();
//==================//
function greet(message) {
  message();
}
function message() {
  console.log('Hello World');
}

greet(message);
//===========================//
function createBase(baseNumber) {
  return function(N) {
    return baseNumber + N;
  }
}

var addSix = createBase(6);
console.log(addSix(10));
//=========================//

console.log('===========================================');
var g = 10;
function func() {
  if (g == 10) {
    var t = 20;
    let p = 30;
  }
  console.log(t);
  console.log(p);
}
func();
//======================//
function dispData() {
  console.log("displayed data");
}
function getData(dispData) {
  console.log("received data");
  dispData();
}
getData(dispData);

//////////////////
function outer() {
  var x = 10;
  console.log("outer");
  function inner() {
    console.log(x);
  }
  return inner;
}

var closureFn = outer();
closureFn();