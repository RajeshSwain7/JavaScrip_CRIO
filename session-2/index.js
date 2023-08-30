//1. You are given two numbers a and b as arguments. You have to implement the function isEqual that will return true if the numbers are equal, else return false.

function isEqual(a, b) {
  if (a == b) {
    return true;
  } else {
    return false;
  }
}
//var num1 = prompt("Enter NUmber1: ");
//var num2 = prompt("Enter number2: ");
console.log(isEqual(3, 3));


//2. You are given two numbers a and b as arguments. You have to implement the function sumOfTwoNumbers which will return the sum of these two numbers.

function sumOfTwoNumber(a, b) {
  return (a + b);
}
console.log(sumOfTwoNumber(3, 3));

//3. You are given a number a as an argument. You have to implement the function findCube that will return the cube of that number. Cube of a number basically means the number is multiplied by itself thrice.

function cubeOfNumber(a) {
  return (a*a*a);
}
console.log(cubeOfNumber(9));

//4. You are given a number a as an argument. You have to implement the function incrementNumber that will increment the number by 1 and return the result.
function incrementNumber(z){
  return z+1;
  
}
console.log(incrementNumber(4));

//5. You are given two decimal numbers a and b as arguments. You have to implement the function multiplyTwoDecimals which will multiply the two numbers.
function multiplyTwoDecimals(s,r){
  return (s*r);
}
console.log(multiplyTwoDecimals(34.55,56.66));

//6.You are given two numbers a and b as arguments. You have to implement the function remainderOfDivision that returns the remainder when you divide the first number by the second number.
function remainderOfDivision(a, b) {
    var reminder= a % b;
    return reminder;
}
console.log(remainderOfDivision(5, 4));

//7. You are given three numbers a, b and c as arguments. You have to implement the function compareNumbers such that EITHER the first number is equal to the second OR the second number is equal to the third, return true. Else, return false.
function compareNumbers(a, b, c) {
    if (a==b || b==c){
        return true;
    }
    else{
        return false;
    }
}
console.log(compareNumbers(4, 4, 4));

//8.You are given three numbers a, b and c as arguments. You have to implement the function isDescending that will return true only if the first number is greater than the second number AND the second number is greater than the third number. Else, return false.
function isDescending(a, b, c) {
    if (a>b && b>c){
        return true;
    }
    else{
        return false;
    }
}
console.log(isDescending(4, 1, 4));

//9. You are given two numbers a and b as arguments. You have to implement the function findLargest that will return the largest number between the two numbers.
function findLargest(a, b) {
  if (a > b) {
    return `${a} is greater`;
  } else {
    return `${b} is greater`;
  }
}
console.log(findLargest(4, 1));

//10.You are given a number num as an argument. You have to implement the function evenOrOdd that will return "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(num) {
    
    if(num % 2 == 0){
        return "Even";
    }
    else 
    {
        return "Odd";
    }
}
console.log(evenOrOdd(5));

//11.You are given three numbers side1, side2 and side3 as arguments. You have to implement the function isEquilateralType that will return true if all the sides are equal else it will return false.

//Please note: All the sides will be greater than 0, that is side1> 0, side2> 0 and side3> 0. 
function isEquilateralType(side1, side2, side3) {
  if (side1 > 0 && side2 > 0 && side3 > 0) 
  {
    if (side1 === side2 && side2 === side3)
    {
      return true;
    } 
    else 
    {
      return false;
    }
  } 
  else 
  {
    return false;
  }
}
console.log(isEquilateralType(2, 2, 2));

//12. You are given three numbers a, b and c as arguments. You have to implement the function findSmallest and return the smallest of the three numbers.
function findSmallest(a, b, c) {
     if (a < b && a < c)
    {
    return a;
    } 
    else if (b < c)
    {
    return b;
    } 
    else
    {
    return c;
    }
}
console.log(findSmallest(2, 1, 5));

/*13. A school has the following rules for grading system:

[0, 25) - F

[25, 45) - E

[45, 50) - D

[50, 60) - C

[60, 80) - B

[80, 100] - A

If the input is less than 0 or greater than 100 then it is considered invalid.

You are given a number marks as an argument. You have to implement the function gradeMarks such that it will return the corresponding grade or "Invalid" if the input is invalid. */

function gradeMarks(marks) {
  if (marks >= 80 && marks <=100) {
    return "A"; 
  }
  else if(marks >= 60 && marks < 80){
    return "B";
  }
  else if(marks >= 50 && marks < 60){
    return "C";
  }
  else if(marks >= 45 && marks < 50){
    return "D";
  }
  else if(marks >= 25 && marks < 45){
    return "E";
  }
  else if(marks >= 0 && marks < 25){
    return "F";
  }
  else{
    return "Invalid";
  }
}
console.log(gradeMarks(55));

//14. You are given two numbers ageand weight as arguments. You have to implement the function checkBloodDonationEligiblity that will determine if the given age is eligible for blood
function checkBloodDonationEligiblity(age, weight) {
  if (age >= 18)
  {
    if (weight > 50)
    {
      return "Eligible";
    } 
    else
    {
      return "NotEligible";
    }
  }
  else
  {
    return "UnderAge";
  }
}
console.log(checkBloodDonationEligiblity(26, 70));

/*15. A year is considered a leap year, if either of the 2 conditions are met:
The year is multiple of 400.

The year is multiple of 4 and not multiple of 100.

You are given the number year as an argument. You have to implement the function checkLeapYear that will return "LEAP YEAR" if it's a leap year else return "COMMON YEAR". */
function checkLeapYear(year) {
  if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    return "LEAP YEAR";
  }
  else {
    return "COMMON YEAR";
  }
}
console.log(checkLeapYear(2022));
