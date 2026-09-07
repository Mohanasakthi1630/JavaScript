//Q-1
// var  -  Can be reassigned and can be redeclared
// let  -  Can be reassigned and cannot be redeclared
// const - Cannot be reassigned and cannot be redeclared

// Q-2
// We can redeclare var variable. let and const cannot be redeclared. it throws error.

// Q-3

//Output : 
// x = 20
// y = 25
// z cannot be reassigned because it is a const variable.

//Q-4

// Declaring - Created a variable name and assign it in memory.
// Initializing - It gives its first value to the assigned variable.

//Q-5

// Output :
// Undefined. 

//Q-6

// Hoisting is we can use some variables and functions before they are declared in code.
// eg :
// console.log(Welcome); // undefined
//  var Welcome = "Hello";

//  console.log(Welcome); // Welcome

//Q-7

// Null - It represents absence of value.
// Undefined - Variable has beed declared but not assigned a valye yet.

// Q-8

// console.log(typeof null);   // Object
// console.log(typeof undefined); // undefined
// console.log(typeof []);  // object
// console.log(typeof {});  // object

// Q-9

// == - == operator checks only for the same value or not.
// === -  === operator checks for bot datatype and the value whether it is same or not.

// Q-10

// ++i  -  pre increment increases the value of i by 1 and returns the value.
// i++  -  post increment returns original value and then increases it by 1 .

//Q-11

// let x = 10;
// let y = "5";
// console.log(x + y);   // 105
// console.log(x - y);   // 5
// console.log(x * y);   // 50
// console.log(x / y);   // 2


// Q-12

// AND (&&)  -  returns true only if all conditions are true 
//eg : 
     let a = true
     let b = true
     if(a && b){
      console.log("True");
     }else{
      console.log("False")
     }

// OR (||)  -  Returns true if any one condition is true 
// eg :
let c = true;
let d = false;
if(c || d){
    console.log("True");
}
else{
    console.log("False");
}

// NOT (!) -  Returns opposite of the boolean value.
//eg :
let e = false;
if(!e){
    console.log("True");
}

//Q - 13

// console.log(5 > 3 && 10 > 5);   // True
// console.log(5 > 10 || 10 > 5);  // True
// console.log(!(5 > 3));          // False

//Q-14

// Ternary Operator  -  Ternary operator is one-line alternative for if- else statement . It evaluates true or false.
// eg :
let agee = 20;
 let canVote = agee >= 18 ? "Can Vote" : "Cannot Vote";

//  console.log(canVote);

//Q-15

// Implicit type casting  -  It automatically converts the mixed data type to a single data type.
// Explicit type casting  -  Manually executed by the developer using built-in functions ot operators.

//Q-16

// console.log(Number("123"));    // 123
// console.log(Number("hello"));  // Nan
// console.log(Number(true));     // 1
// console.log(Number(false));    // 0
// console.log(Boolean(0));       // false
// console.log(Boolean("hello"))  // true

// Q-17

// NaN  -  Not a Number it is defined as the declared or initialized value is not a actual Number.
//eg : console.log(Number("hello"));

// Q-18
//  if-else  -  It evaluates the condition is true or false and flows accordingly.
//  switch   -  Switch statements compares single expression against the values for strict equality.

// Q-19

let age = 20;
if(age >= 18) {
    console.log("Adult");   // True
} else {
    console.log("Minor");
}

// Output :
// Adult 


// Q-20

// nested if  -  Nested if is where the if occurs inside another if statement .
// eg :
let value = true ;
let item = true;

if(value){
    console.log("Value is true");
    if(item){
        console.log("Item is true");
    }
    else{
        console.log("Item is False");
        
    }
}else{a
    console.log("Value is False.");
    
 }


// Q-21
let num = prompt("Enter the value :");

let check = prompt % 2 == 0 ? "Odd Number." : "Even Number.";

console.log(check);

//Q-22

// While  -  While Evaluates the condition in the beginning of each iteration.
// do-while  -  do-while  Evaluated the condition at the end of the each iteration.

// Q-23

// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// Output :
//  1
//  2
//  3
//  4
//  5

// Q-24

// for-of -  It is used to iterated over the value of an object
// for-in -  it is used to iterates over the keys of an object

// Q-25
let sum = 0;

for(let i = 1 ; i<=100 ; i++){
    sum = sum+i;
}
console.log(sum);

//Q-26
// Slice - It is used to cut between the numbers without changing the numbers.
// Splice - It  modifies the original array directly be removing , replacing or adding elements.

// Q-27

// let arr = [1, 2, 3];
// arr.push(4);         [1,2,3,4]
// arr.pop();           [1,2,3]
// arr.unshift(0);      [0,1,2,3]
// arr.shift();         [1,2,3]
// console.log(arr);

//Output :  [1,2,3]

// Q-28

// Function Declaration  -  Can be called before it is defined in the code.
// Function Expression   -  Can be annonymous . it is named as undefined.

// Q-29

// Arrow Function  -   An arrow function is shorter and more compact way to write a function in javascript.
//eg :
const add = (a,b) => {
    return a + b;
}

console.log(add(5,5));


// Q-30
// function greet() {
//     return "Hello";
// }
// let message = greet();   
// console.log(message);

// Output :   Hello

