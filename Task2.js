//Task-1

var studentName = "Sakthi"
let studentAge = 22
const collegeName = "Karpagam College of Engineering"
console.log(studentName)
console.log(studentAge)
console.log(collegeName)

2. 
var studentName= "Mohanasakthi"
console.log(studentName);

3.
studentAge = 23
console.log(studentAge)

4.
// const collegeName = "KCE"
//Error : collegeName has already been declared

// 5.
studentName = "Sakthi S"
console.log(studentName)

6.
// let studentAge = 24
// console.log(studentAge)
// Error : studentAge has already been declared


//Task-2

const name = prompt("Enter your name :")
const age = prompt("Enter your age :")
const city = prompt("Enter your city :")
 console.log("Name :", name)
 console.log("Age :",age)
 console.log("City :",city)

//Task-3

const userName = prompt("Enter the user name :")
alert(userName)

//Task-4

let birthYear = prompt("Enter your birth year :")
const currentYear = 2026
const Agee = currentYear- birthYear
console.log("Birth year :",birthYear)
console.log("Age :",Agee)

//Task-5

var str = "Hello"
let num = 100
let dec = 25.5
let boo = true
let booo = false
let und = undefined
let nulll = null
console.log(typeof(str))
console.log(typeof(num))
console.log(typeof(dec))
console.log(typeof(boo))
console.log(typeof(booo))
console.log(typeof(und))
console.log(typeof(nulll))

//Task-6

var details = {
    name : "Sakthi",
    age : 22,
    city : "Coimbatore",
    qualification : "BE",
    isStudent : true,
}
console.log(details)
console.log("Name :",details.name)
console.log("Age :",details.age)
console.log("City :",details.city)
console.log("Qualification :",details.qualification)
console.log("isStudent :",details.isStudent)

//Task-7

var fruits = ["Apple","Mango","Orange","Banana","Grapes","Papaya"]
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[fruits.length-1])
console.log(fruits.length)

//Task-8

let a = 20;
let b = 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Task-9

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let totalPrice = shirt + pant + shoes;
console.log("Total :",totalPrice);

//Task-10

let tamil = 80;
let english = 75;
let maths = 90;
let totalSubjects = 3
let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / totalSubjects;
console.log("Total Marks :",totalMarks)
console.log("Average Marks :",averageMarks)

//Task-11
// Output :
// a=11
// b=10


//Task-12
//Output :
//a=11
//b=11


//Task-13
//Output :
//a=19
//b=20


//Task-14
//Output :
//a=19
//b=19


//Task-15
//Output :
//a= 7
//b= 4
//c= 7
//d= 5


//Task-16
let number = 10;
number +=5;
console.log(number);
number-=2;
console.log(number);
number*=6;
console.log(number);
number/=1;
console.log(number);
number%=5
console.log(number);
number**=5
console.log(number);

//Task-17
var Name = "Sakthi";
var Age = 23;
var City = "Coimbatore";
const College = "KCE";

var favSubjects = ["DSA","JAVA","PYTHON","JS","HTML"];

var student = {
    name : Name,
    age : Age,
    city : City,
    subjects : favSubjects,
    isStudent : true,
}

console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(favSubjects[0])
console.log(favSubjects[favSubjects.length-1])
console.log(favSubjects.length)
console.log(student);

//Final Challenge :
let num1 = Number(prompt("Enter the First Number :"));
let num2 = Number(prompt("Enter the Second Number :"));

let add = num1+num2;
let sub = num1-num2;
let mul = num1*num2;
let div = num1/num2;
let mod = num1%num2;
let pow = num1**num2;

console.log("Addition :",add);
console.log("Subtraction :",sub);
console.log("Multiplication :",mul);
console.log("Division :",div);
console.log("Modulus :",mod);
console.log("Power :",pow);