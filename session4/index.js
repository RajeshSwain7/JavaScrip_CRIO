let i = 0;
for (let j = 10; j >= i + 1; j--) {
  console.log(j);
}
/*//=================================/
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt = value; 
console.log(txt)
}
//=========================//*/

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  let east = value * 2;
  console.log(east);
}
//===============================//

let arr = ['a', 'b', 'c', 'a', 'd', 'e', 'c', 'f', 'c'];

console.log(arr.includes('a'));
console.log(arr.includes('b', 3));

//=============================//
var arrj = ["Hi", "how", "are", "you", "doing", "today"];
const stringFromParts = arrj.join("-");
console.log(stringFromParts);
let stringFromParts2 = arrj.join();
console.log(stringFromParts2);
stringFromParts2 = arrj.join("");
console.log(stringFromParts2);
stringFromParts2 = arrj.join(" ");
console.log(stringFromParts2);
//=================//
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(` i , j    =   ${i} , ${j} `);
  }
}
//=======================//
let str = "learn by";
let arr2 = str.split(' ');
arr2.push("doing");
str = arr2.join(' ');
console.log(str);
//====================//
let mdArr = [[1, 2, 3], [4, 5], [6, 7]];
console.log(mdArr.length + mdArr[1][0] + mdArr[0].length);
//==================//
let obj = { 1: "One", 2: "Two" };
console.log(obj[1]);

///////////////////////////////
let obj1 = { firstName: "Vijay", lastName: "Chauhan" };
obj1.middleName = "Dinanath";
console.log(obj1);
obj1.isEngineer = true;
console.log(obj1);
console.log(obj1.firstName + " " + obj1.middleName + " " + obj1.lastName);
delete obj1.isEngineer;
console.log(obj1.hasOwnProperty("isEngineer"));
console.log("===========================================");

////////////////////////////////////////
let scale = 0;
let ar = 1;
console.log(ar/scale);
ar = -1; 
console.log(ar/scale);
ar = 0;
console.log(ar/scale);
ar = -0;
scale = 1;
console.log(ar/scale);
