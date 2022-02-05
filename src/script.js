/* before and */
let a=1;
var b= 5;
var myVar = 0;
let s="string";
var v;
var V;
console.log(v.id,V.id)
let e=1; /*can't be changed*/
var f=1;
var f=0;
var decimal=3.14;
const k=1;
console.log(1 +3);
console.log(5-4);
console.log(8*4);
console.log(8/4);
console.log(f++);

console.log(b--);
console.log(1.5 * 1.4);
console.log(1.5 / 1.4);
console.log(5%2);
console.log(f+=5);
console.log(f-=2);
console.log(f*=2);
console.log(f/=2);
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';//Quoting Strings with Single Quotes
//Concatenating Strings with the Plus Equals  Operator
let myStr="This is the first sentence.";
myStr=" This is the second sentence.";
//Concatenating Strings with Plus  Operator
const myStr = "This is the start."+ " This is the end."; // Change this line
// Only change code below this line
const myName = "Arya";
const myStr = "My name is "+ myName+ "and I am well!";
// Change code below this line

const someAdjective = "arya";
let myStr = "Learning to code is ";
myStr+=someAdjective;
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
//Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr= "Hello World"; // Change this line
// Only change code above this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myNoun+" "+myAdjective +" "+myVerb+" "+myAdverb; // Change this line
// Only change code above this line
// Only change code below this line
const myArray = [" ",23];
// Only change code below this line
const myArray = [["Bulls", 23], ["White Sox", 45]];
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0]=45;
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray=myArray.pop();
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray= myArray.shift();
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift("["Paul", 35]")
const myList = [["s",1],["d",2],["f",33],["h",4],["m",5]];
function reusableFunction()
{
  console.log("Hi World");
}

reusableFunction();

function functionWithArgs(a1,a2)
{
  console.log(a1+a2);
}
functionWithArgs(1,5)
function timesFive(a)
{
 return 5*a;
}

// Declare the myGlobal variable below this line


function fun1() {
  // Assign 5 to oopsGlobal Here
      oopsGlobal=5
}

// Only change code above this line
let myGlobal=10;
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
  // Only change code below this line
   let myVar=5
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed=processArg(7);
function trueOrFalse(wasThatTrue) {
  // Only change code below this line
 if (wasThatTrue==true)
 {
   return "Yes, that was true";
 }
 else
 {
   return "No, that was false";
 }


  // Only change code above this line

}
// Setup
function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger  than 5";
  }

  else{
    result = "5  or Smaller";
  }

   
  // Only change   code  above  this   line
  return result; 
}

testElse(4);