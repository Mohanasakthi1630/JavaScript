// Task-1
for(let a = 1; a <= 10; a++){
    console.log("Task-1 Loop :", a);
}

// Task-2
for(let b = 10; b >= 1; b--){
    console.log("Task-2 Loop :", b);
}

//Task-3

for(let even = 1 ; even <=20 ; even++){
    if(even%2 == 0){
        console.log("Even Numbers :", even);
    }
}

//Task-4

for(let odd = 1 ; odd <=20 ; odd++){
    if(odd%2 != 0){
        console.log("Odd Numbers :",odd);
        
    }
}

//Task-5

let num = prompt("Enter the Number :");

for(mul = 1 ; mul <= 10 ; mul ++){
    console.log(`${num} * ${mul} = `,num*mul);
}

//Task-6

let number = 10;
while(number > 1){
    console.log(number);
    number--;
}

//Task-7

let Num = 1;
let sum = 0;
while(Num <= 10){
    sum = sum + Num;
    Num++;
}
console.log("Sum :", sum);

//Task-8

let Numbers = 1
do{
    console.log(Numbers);
    Numbers++;
}while(Numbers <=5);

//Task-9
// let a = 10;

// do {
//     console.log(a);  // Do while is a entry control loop it automatically runs the loop atleast 1 time and runs until the condition is false so it prints 10 one time.
//     a++;
// } while (a <= 5);

// Task-10
let name ="Javascript";
for(let str of name){
    console.log(str);
}

//Task-11
let fruits = ["apple","orange","banana","mango","grapes"];

for(let str1 of fruits){
    console.log(str1);
    
}

//Task-12
let students = ["Mohanasakthi","Lipika","Swetha","Ram"];

for(let str2 of students){
    console.log("Students :",str2);
}

//Task-13
let employee = {
    Name : "Mohanasakthi",
    Age : 23,
    Role : "Developer",
    City : "Coimbatore", 
}
for(str3 in employee){
    console.log(str3,employee[str3]);
}

//Task-14
let product = {
    productName : "Bike",
    price : 300000,
    brand : "Royal Enfield",
    category : "Classic 350",
    stock : 5,
}

for(str4 in product){
    console.log(str4,product[str4]);
}

//Task-15
function welcome(){
    console.log("Welcome to Javascript.");
}
welcome();
welcome();
welcome();

//Task-16
function greet(personName){
    console.log("Hello ",personName);
}
greet("Mohanasakthi");
greet("Swetha");
greet("Lipika");

//Task-17
function Student_Details(std_name , std_age , std_dept){
    console.log(`Name : ${std_name}`);
    console.log(`Age :${std_age}`);
    console.log(`Department :${std_dept}`);
}

Student_Details("Mohanasakthi",23,"CSE");
Student_Details("Lipika",22,"Commerse");
Student_Details("Swetha",23,"Medical Assistant");

//Task-18
function add(a , b){
    return a + b;
}
let result = add(10 , 20);
console.log(result);

//Task-19
function salary (amount){
    return amount;
}
let Salary = salary(25000);
console.log(Salary);

//Task-20
function bonus(emp_Salary , bonusAmount){
    return emp_Salary + bonusAmount;
}
let total = bonus(50000,5000);
console.log("Total =",total);

//Task-21

function Employee(emp_Name , role = "Developer"){
    console.log("Name :",emp_Name);
    console.log("Role :",role);
}

Employee("Mohanasakthi");
Employee("Lipika","Inverstment Banking");

//Task-22

function square(squ_number){
    return squ_number * squ_number;
}
console.log(square(2));
console.log(square(5));
console.log(square(6));
console.log(square(8));
console.log(square(9));

//Task-23

let calculate = function(a,b){
    return a + b;
}
console.log(calculate(5,10));

//Task-24

let multiply = (a,b) =>{
    return a * b;
}
console.log(multiply(5,5));

// Task-25

// function test() {

//     if (true) {

//         var a = 10;
//         let b = 20;
//         const c = 30;

//         console.log(a);   // a value can be accessed because var is global scope.
//         console.log(b);   // b value can be accessed because let is block scope it is inside block.
//         console.log(c);   // c value can be accessed because let is block scope it is inside block.
//     }

//     console.log(a);       // a value can be accessed because var is global scope it can be accessed anywhere in the code.
//     console.log(b);       // b value cannot be accessed because it is block scope 
//     console.log(c);       // c value cannot be accessed because it is block scope
// }

// test();

//Task-26

// console.log(a);      // The value becomes undefined 
// var a = 10;

//Task-27

// console.log(b);     // b cannot be accessed without initialization.
// let b = 20;

//Task-28

// console.log(c);
                      //  var can be accessed but it becomes undefined.
// const c = 30;      //  let and const can be hoisted but cannot use before their declaration.

//Task-29

(function (product_1,discount_1){
    alert("Welcome to JavaScript");

    alert(`On going sales on ${product_1} best price and the discount is ${discount_1}%`);
})
("Bags",50);

//Task-30
// function Welcome_1(){        // Call back Function
//     console.log("Welcome");
// }
// function Welcome_2(welcome_2){  // Higher order Function
//     welcome_2();
// }
// Welcome_2(Welcome_1);

//Task-31

function* cashback(){
    yield "10% Cashback";
    yield "20% Cashback";
    yield "30% Cashback";
    yield "Better Luck Next Time";
}
let cashMessage = cashback();
for(let cash of cashMessage){
    console.log(cash);
}

//Task-32

let employees = [
    {
        name: "Mohanasakthi",
        age: 23,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Swetha",
        age: 23,
        department: "Medical",
        role: "Medical Assistant",
        salary: 35000
    }
];
1. 
for(let emp of employees){
    console.log(emp)
}

2.
for(let employee of employees){
    for(let keys in employee){
        console.log(keys,employee[keys]);
    }
}

3.
function displayEmployee(employee) {
    console.log("Name :", employee.name);
    console.log("Age :", employee.age);
    console.log("Department :", employee.department);
    console.log("Role :", employee.role);
    console.log("Salary :", employee.salary);
}
displayEmployee(employees[0]);
displayEmployee(employees[1]);

4.
function displayEmployee_info(name, age, department, role, salary) {
    console.log(name);
    console.log(age);
    console.log(department);
    console.log(role);
    console.log(salary);
}

displayEmployee_info("Sakthi",23,"IT","Developer",50000);

5.
function getSalary(employee) {
    return employee.salary;
}
console.log(employees[0].salary);
console.log(employees[1].salary);

6.
for(let employee of employees){
    if(employee.salary >= 40000){
        console.log(employee.name , employee.salary);
    }
}

// 7.
// let addBonus = (salary,bonus)=>{

//     return salary + bonus;
// }
// addBonus(50000,5000);

8.

function* emp_Benefits(){
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let benefits = emp_Benefits();
for(let str5 of benefits){
    console.log(str5);
}


