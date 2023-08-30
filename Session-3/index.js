function largNumber(x, y, z) {
  if (x > y) {
    if (x > z) {
      console.log("X = " + x + " is the greatest");
    }
    else {
      console.log("Z = " + z + " is the greatest");
    }
  }
  else {
    if (y > z) {
      console.log("Y = " + y + " is the greatest");
    }
    else {
      console.log("Z = " + z + " is the greatest");
    }
  }
}
largNumber(9, 5, 2);
//=====================================
function largNum(x, y, z) {
  if (x > y && x > z)
    console.log("X = " + x + " is the greatest");
  else if (z > x && z > y)
    console.log("Z = " + z + " is the greatest");
  else
    console.log("Y = " + y + " is the greatest");
}
largNum(9, 8, 7)
//==================================
let str = "I love coding, but I sometimes hate it as well!";
let i = 2;
let answer = str.substring(i, 10) + "ing,";
console.log(answer.concat(' m', 'ay', 'be'));
//=========================================
let lang = "LavaScript";
lang[0] = "J";
console.log(lang);
//========================//
//=====================================//
function weekDay(num) {
  var day;
  switch (num) {
    case 0:
      day = 'Monday';
      break;
    case 1:
      day = 'Tuesday';
      break;
    case 2:
      day = 'Wednesday';
      break;
    case 3:
      day = 'Thursday';
      break;
    case 4:
      day = 'Friday';
      break;
    case 5:
      day = 'Saturday';
      break;
    case 6:
      day = 'sunday';
      break;
    case 7:
    default:
      day = "Invalid";
  }
  console.log(day);
}
weekDay(3);
//===================================//

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    continue;
  } else if (i % 3 === 0) {
    continue;
  } else if (i % 5 === 0) {
    continue;
  } else {
    console.log(i);
  }
}
//=======================//
let myStr = 'Raj';
myStr = 'Rajesh';
myStr[0] = 'A'
console.log(myStr);
//=======================//
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); //

//====================//
const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);
//====================//
let text1 = "Please visit Microsoft!";
let newText = text1.replace("Microsoft", "W3Schools");
console.log(newText);
console.log(text1);
//========================//
let text2 = "Please visit Microsoft and Microsoft!";
let newText1 = text2.replace(/Microsoft/g, "W3Schools");
console.log(newText1);
//========================//
let text12 = "Hello World!";
let text22 = text12.toUpperCase();
text12 = text12.toLowerCase();
console.log(text22);
console.log(text12);
//============================//
const arr = [1, 'apple', { name: 'John' }, [1, 2, 3], function() { console.log('Hello!'); }];
console.log(arr);
//================================//
let str1 = "LavaScript";
str1[0] = "J";
let arr1 = ['L', 'a', 'vaScript'];
arr1[0] = "J";
console.log(str1);
console.log(arr1);
//==========================//
let a = [1, 2, 3];
let b = [5, 1, 6];
b.shift();
b.pop();
console.log(b);
b.push(2, 3);
console.log(b);
let y = a;
console.log(a == b);
console.log(a == y);
//===============================//
function SumofNumber(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(SumofNumber(10));
//======================//
let car = ["volvo", "bmw", "saab"];
car[0] = 'opel';
console.log(car);
//============================//

let ar = ["orange", "banana", "apple", "mango"];
let stage = ar.toString();
console.log(stage);
//==============================//
const car1 = ["orange", "banana", "apple", "mango"];
let lengthOfArray = car1.length;
console.log(lengthOfArray);

//========================//
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let fruit = fruits.length - 1;
console.log(fruit);
fruit = fruits[fruits.length - 1];
console.log(fruit);
//===========================//
const simpleArray = [1, 2, 3, 4];
for (let i = 0; i < simpleArray.length; i++) {
  console.log(simpleArray[i]);
}
//========================//
let ab = [1, 2, 3]
let bc = [1, 2, 3]
let c = ab

console.log(ab === bc);
console.log(ab == bc);
console.log(ab == c);
console.log(ab === c);
//==============================//

const ark = [1, "Kevin", null, 0, true];
for (var itr = 0; itr < ark.length; itr++) {
  if (ark[itr] !== null && ark[itr] !== 0)
    console.log(ark[itr]);
}
//====================//

let pek = [1, 2, 3, 4, 5];
pek.splice(2, 0, 0);
console.log(pek);
let tesk = pek.slice(1, 1);
console.log(tesk);
//===========================//

const u= ["Banana", "Orange", "Apple", "Mango"];
u.sort();
u.reverse();
console.log(u);


//===================================//
const prc=[1,43,45,2,3,56,700];
function compare(a,b){
  if(a>b){
    return 1;
  }else{
    return -1;
    }
}
prc.sort(compare);
console.log(prc);
//=======================//
const pr=[1,43,45,2,3,56,700];
function compare(a,b){
  if(a>b){
    return 1;
  }else{
    return -1;
    }
}
pr.sort( compare);
console.log("sorr arr: ", pr);
pr.reverse( );
console.log("reverse arr: ", pr);
