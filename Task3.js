//Task-1
// var Name = "Sakthi";
// let Age = 23;
// let City = "Coimbatore";
// const College = "Karpagam College of Engineering";


// console.log(Name);
// console.log(Age);
// console.log(City);
// console.log(College);

// var Name = "Mohanasakthi";
// console.log(Name);

// Age = 22;
// console.log(Age);

// // const value cannot be redeclared or reassigned.

// var Name = "Sakthi";
// let Age = 23; //Cannot redeclare block-scoped Variable.
// let City = "Coimbatore";  //Cannot redeclare block-scoped Variable.
// const College = "Karpagam College of Engineering";  //Cannot redeclare block-scoped Variable.

//Task-2
var name = "Sakthi";
console.log(name);

alert(name);

var city = confirm("Are you from Coimbatore ?");

var department = prompt("Which Department are you in ?");
console.log(department);

console.log(document.writeln(department));

//Task-3
var userDetails = {
    Name : prompt("Enter your name :"),
    Age : prompt("Enter your Age :"),
    City : prompt("Enter your City :"),
    Qualification : prompt("Enter your Qualification :"),
}

console.log(userDetails);

//Task-4
// var a = "JavaScript"; // String
// let b = 100;          // Number
// let c = 99.5;         // Number
// let d = true;         // Boolean
// let e = false;        // Boolean
// let f = undefined;    // Undefined
// var g = null;         // Object

// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));
// console.log(typeof(f));
// console.log(typeof(g));

//Task-5
let students = ["Arun","Priya","Kumar","Divya","Rahul"];

console.log(students[0]);
console.log(students[1]);
console.log(students[students.length-1]);
console.log(students.length);

//Task-6

const employee = {
    emp_name : "Mohanasakthi",
    emp_age : 23,
    emp_role : "Developer",
    emp_skills : ["Java","HTML","CSS","JavaScript"],
    isWorking : true,
    emp_qualification : ["BE","ME"],
}

console.log(employee.emp_name);
console.log(employee.emp_age);
console.log(employee.emp_role);
console.log(employee.emp_skills[0]);

const last_Qualification = employee.emp_qualification[employee.emp_qualification.length-1];

console.log(last_Qualification);
console.log(employee.isWorking);

//Task-7
let a = 20;
let b = 5;

console.log("Addition :",a+b);
console.log("Subtraction :",a-b);
console.log("Multiplication :",a*b);
console.log("Division :",a/b);
console.log("Modulus :",a%b);
console.log("Exponential :",a**b);

//Task-8
let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;
let Bag = 799;
let totalPrice = Shirt + Pant + Shoes + Bag ;
console.log("Total Price :",totalPrice);

//Task-9
//A
// a - 11
// b - 10
// let a = 10;
// let b = a++;
// console.log(a);
// console.log(b);

//B
// a - 11
// b - 11
// let a = 10;
// let b = ++a;
// console.log(a);
// console.log(b);

//C
// a - 9
// b - 10
// let a = 10;
// let b = a--;
// console.log(a);
// console.log(b);

//D
// a - 9
// b - 9
// let a = 10;
// let b = --a;
// console.log(a);
// console.log(b);

//Task-10
let num = 10;
num += 5;
console.log(num);

num -= 3;
console.log(num);

num *= 2;
console.log(num);

num /= 4;
console.log(num);

num %= 3;
console.log(num);

num **= 2;
console.log(num);

//Task-11
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 9);  // false

console.log(5 == "5"); // true
console.log(5 === "5"); // false

console.log(10 != "10"); // false
console.log(10 !== "10"); // true

//Task-12
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

//Task-13
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

//Task-14
console.log(!true);   // false
console.log(!false);  // true
console.log(!(5 > 10));  // true
console.log(!(10 > 5));  //false

//Task-15
console.log(5 == "5" && !(5 === 5) || 6 > 7);   // false

console.log(10 > 5 && 8 < 12 || 4 === "4");   // true

console.log(7 === 7 && 10 != "10" || 5 >= 5);   // true

console.log(15 < 10 || 20 > 15 && 5 == "5");   // true

//Task-16
let age = 20;

age >= 18 ? console.log("Eligible to vote.") :console.log("Not eligible to vote");

//Task-17
let password = true;

password = true ? console.log("Login Successful") : console.log("Wrong Password");

//Task-18
let name_1 = "Mohanasakthi";
let age_1 = 23;
let city_1 = "Coimbatore";

console.log("My name is "+ name_1,". I am "+age_1," years old. I live in "+city_1);
console.log("My name is ",`${name_1}.`,"I am ",`${age_1} years old. I live in `,`${city_1}.`);

//Task-19
console.log(typeof(String(100)));       // String
console.log(typeof(String(true)));      // String
console.log(typeof(String(undefined))); // String
console.log(typeof(String(null)));      // String
console.log(typeof(String([1,2])));     // String

//Task-20
console.log(Number());         // 0
console.log(Number(""));       // 0
console.log(Number("123"));    // 123
console.log(Number("a1"));     // Not a Number
console.log(Number(true));     // 1
console.log(Number(false));    // 0
console.log(Number(undefined)); // Not a Number
console.log(Number(null));      // 0

//Task-21
console.log(Boolean());        // false
console.log(Boolean(""));      // false
console.log(Boolean("hello")); // true
console.log(Boolean(123));     // true
console.log(Boolean(true));    // true
console.log(Boolean(false));   // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null));    // false
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true

//Task-22
let age_2 = prompt("Enter your age :");

if(age_2 >= 18){
    console.log("You can Vote.")
}
else{
    console.log("You can't Vote.")
}

//Task-23

let number_1 = prompt("Enter the Number :");

if(number_1 > 0 ){
    console.log("Positive Number.");
}
else if(number_1 < 0){
    console.log("Negative Number.");
}
else{
    console.log("Zero.")
}

//Task-24
let user_mark = prompt("Enter the Mark :");

if(user_mark >= 90 && user_mark <= 100){
    console.log("A Grade.");
}
else if(user_mark >= 80 && user_mark <= 89){
    console.log("B Grade.");
}
else if(user_mark >= 70 && user_mark <= 79){
    console.log("C Grade.");
}
else if(user_mark >= 60 && user_mark <= 69){
    console.log("D Grade.")
}
else if(user_mark < 60){
    console.log("Fail.");
}
else{
    console.log("Invalid Mark.")
}

//Task-25
let jobAge = prompt("Enter The Age :");

if(jobAge > 18 ){
    console.log("Eligible Age .")
    let jobHeight = prompt("Enter The Height :");
    if(jobHeight >= 160){
        console.log("Eligible Height.")
        let jobWeight = prompt("Enter The Weight :");
        if(jobWeight > 60){
            console.log("Congratulation ! You are Selected.");
        }else{
            console.log("Not Eligible Weight.")
        }
        
    }else{
        console.log("Not Eligible Height.")
    }
}else{
    console.log("Not Eligible Age.")
}

//Task-26
let color = prompt("Enter the Color :");

switch (color) {
    case "red" : console.log("STOP");
    break;

    case "yellow" : console.log("READY")
    break;

    case "green" : console.log("GO");
    break;

    default : console.log("Invalid Color");
}

//Task-27
let day = prompt("Enter the Day Number :");

switch (day){
    case "1" : console.log("Monday");
    break;

    case "2" : console.log("Tuesday");
    break; 

    case "3" : console.log("Wednesday");
    break; 

    case "4" : console.log("Thursday");
    break;

    case "5" : console.log("Friday");
    break;  

    case "6" : console.log("Saturday");
    break; 

    case "7" : console.log("Sunday");
    break; 

    default : console.log("Invalid Day.")
}

//Task-28 - Mini Project

let user_Details = {
    user_name : prompt("Enter The User Name :"),
    user_age : prompt("Enter The User Age :"),
    user_city : prompt("Enter The User City :"),
}


let tamil = Number(prompt("Enter the tamil mark :"));
let english = Number(prompt("Enter the english mark :"));
let maths = Number(prompt("Enter the maths mark :"));


let total_Mark = english + maths + tamil;
let user_Avg = total_Mark / 3;

console.log("Name :",`${user_Details.user_name}`);
console.log("Age : ",`${user_Details.user_age}`);
console.log("City :",`${user_Details.user_city}`);

console.log("Total :",`${total_Mark}`);
console.log("Average :",`${user_Avg}`);

if(user_Avg >=90 && user_Avg <=100){
    console.log("Grade : A")
}
else if(user_Avg >= 80 && user_Avg <=89){
    console.log("Grade : B");
}
else if(user_Avg >=70 && user_Avg <=79){
    console.log("Grade : C");
}
else if(user_Avg >=60 && user_Avg <=69){
    console.log("Grade : D");
}
else if (user_Avg < 60){
    console.log("Fail")
}
else{
    console.log("Invalid Mark.")
}

if(user_Details.user_age >= 18 ){
    console.log("Voting : Eligible")
}
else{
    console.log("Voting : Not Eligible.")
}


