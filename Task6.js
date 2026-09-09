//Task-1
var name = prompt("Enter the Name :");
var dept = prompt("Enter the Department :");

let marks = {
    sub1 : Number(prompt("Enter First Mark :")),
    sub2 : Number(prompt("Enter Second Mark :")),
    sub3 : Number(prompt("Enter Third Mark :")),
    sub4 : Number(prompt("Enter Fourth Mark :")),
    sub5 : Number(prompt("Enter Fifth Mark :"))
};

const MarksArray = Object.values(marks);
const totalMarks = MarksArray.reduce((sum , num) => sum + num,0);
const average = totalMarks / MarksArray.length;

console.log("Name :",name);
console.log("Department :",dept);
console.log("Total Marks :",totalMarks);
console.log("Average :", average);
if(totalMarks > 200){
    console.log("You have Passed .");
}
else{
    console.log("You Have Failed.")
}

if(average >= 90 && average <=100){
    console.log("Grade : A")
}
else if(average >=75 && average <=89){
    console.log("Grade : B");
}
else if(average >=60 && average <=74){
    console.log("Grade : C");
}
else if(average >=50 && average <=59){
    console.log("Grade : D");
}
else if(average < 50){
    console.log("Fail");
}
else{
    console.log("Invalid Marks")
}


//Task-2
let employees1 = {
    
    emp_Name : "Mohansakthi",
    emp_role : "Developer",
    emp_salary : 45000,
    experience : 3
    
}

function calculateSalary(employees1){

    let basic_Salary = employees1.emp_salary;
    let bonus = 0;

    if(employees1.experience >= 2){

        bonus = basic_Salary * 15/100;
    }
    else if(employees1.experience >=5){
        bonus = basic_Salary * 10 / 100;
    }

    let final_Salary = basic_Salary + bonus;

    console.log("Name :", employees1.emp_Name);
    console.log("Role :",employees1.emp_role);
    console.log("Salary :", employees1.emp_salary);
    console.log("Experience :", employees1.experience);
    console.log("Bonus :",bonus);
    console.log("Final Salary :",final_Salary);
    
}

calculateSalary(employees1);

//Task-3

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

let large_value = products.filter((c,i,t) => {
    return c.price > 2000;
})
console.log("Products Above 2000 :",large_value);

let electronic_products = products.find((currentElement) =>{
    return currentElement.category = "electronics";
})

console.log("Electronic Items :",electronic_products);

let first_Product = products.find((first) => {
    return first.price < 1000;
})

console.log("First product below 1000 :",first_Product);

let total_Price = products.reduce((total,product) =>{
    return total + product.price;
},0)

console.log("Total Price :",total_Price);

let product_Cost = products.some((cost) =>{
    return cost.price > 50000;
})

console.log("Any product above 50000 :",product_Cost);

let product_price = products.every((productPrice) =>{
    return productPrice.price > 500;
})

console.log("Every product price is above 500 :",product_price);


//Task-4
let employees = [
    {
        id: 101,
        name: "Sakthi",
        role: "Full Stack Developer",
        salary: 40000
    },

    {
        id: 102,
        name: "Swetha",
        role: "Medical Assistant",
        salary: 30000
    },

    {
        id: 103,
        name: "Lipika",
        role: "Investment Banking",
        salary: 20000
    },
    {
        id: 104,
        name: "Lachu",
        role: "Developer",
        salary: 50000
    },
    {
        id: 105,
        name: "Gowtham",
        role: "Software Engineer",
        salary: 30000
    },
    {
        id: 106,
        name: "Ram",
        role: "Tester",
        salary: 25000
    }
]

let names = employees.map(function(employee) {
    return employee.name;
});

console.log("Employees Names :",names);

let highSalary = employees.filter(function(employee) {
    return employee.salary > 40000;
});

console.log("Employee earning above 40000 :",highSalary);

let employee_id = employees.find(function(id){
    return id.id = 103;
})

console.log("Employee with id 103 :",employee_id);

let total_Salary = employees.reduce(function(total,emp){
    return total + emp.salary;
},0)

console.log("Total Salary :",total_Salary);

let highestPaid = employees.reduce(function(highest, employee) {
    if (employee.salary > highest.salary) {
        return employee;
    }
    else {
        return highest;
    }
});

console.log("Highest Paid Employee:", highestPaid);


let emp_Sorted = employees.sort(function(a,b){
    return b.salary - a.salary;
})

console.log("Sorted Employees :",emp_Sorted);

let employeeNames = employees.map(function(employee) {
    return employee.name;
});

console.log("All Employee names :",employeeNames);


//Task-5
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
]

function calculateCart(cart){

    let cart_Value = cart.reduce(function(sum,item){
        return sum + item.price * item.quantity;
    },0)

    console.log("Total Cart Value :",cart_Value);

    let discount = 0;

    if(cart_Value > 50000){

        discount = cart_Value * 10/100;
    }

    console.log("Discount :",discount);


    let final_amount = cart_Value - discount;

    console.log("Final Amount :", final_amount);

}

calculateCart(cart);


//Task-6

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

let all_Names = students.map(function(student){
    return student.name;
})

console.log("Students Names :",all_Names);

let score = students.filter(function(std_score){
    return std_score.mark > 80;
})

console.log("Student scored above 80 :",score);

let find_Name = students.find(function(std_name){
    return std_name.name = "Priya";
})

console.log("Student name:",find_Name);

let total_mark = students.reduce(function(sum,total){
    return sum + total.mark;
},0)

let average_mark = total_mark / students.length;

console.log("Average Mark :",average_mark);

let failed = students.some(function(fail){
    return fail.mark < 50;
})
 console.log("Anyone Failed :",failed);

let passed = students.every(function(pass){
    return pass.mark > 40;
})

 console.log("Everyone scored above 40 :",passed);

let sorted = students.sort(function(c,d){
    return d.mark - c.mark;
})

console.log("Students Sorted :",sorted);


//Task-7

let numbers = [12,5,8,21,44,7,30,15];

let mul_nums = numbers.map(function(mul){
    return mul * 2;
})

console.log("New Array :",mul_nums);

let even_nums = numbers.filter(function(even){
    return even % 2 == 0;
})

console.log("Even Numbers :", even_nums);

let greater = numbers.filter(function(great){
    return great > 15;
})

console.log("Numbers greated than 15 :",greater);

let first_num = numbers.find(function(great){
    return great > 20;
})

console.log("First Number greater than 20 :",first_num);

let total_nums = numbers.reduce(function(num,tot){
    return num + tot 
},0)

console.log("Total Number :",total_nums);

let any_num = numbers.some(function(any_number){
    return any_number > 40;
})

console.log("Any Number greater than 40 :",any_num);

let every_num = numbers.every(function(every_number){
    return every_number > 0;
})

console.log("Every Number is positive :",every_num);

let sorting = numbers.sort(function(num1 , num2){
    return num2 - num1;
})

console.log("Sorted Numebers :",sorting);


//Task-8
 let string = "JavaScript is very powerful";

let tot_characters = string.length;
console.log("Total Characters :",tot_characters);

let uppercase = string.toUpperCase();

console.log("Uppercase Sentence :",uppercase);

let lowercase = string.toLowerCase();

console.log("Lowercase Sentence :",lowercase);

let str2 = "JavaScript";
console.log("Contains JavaScript :", string.includes(str2));

let first_char = string.charAt(0);
console.log("First Character :",first_char);

let last_char = string.slice(-1);
console.log("Last Character :",last_char);

let num_words = string.split(" ");
console.log("Number of words :",num_words.length);

let replace = string.replace("JavaScript","Python");
console.log("Replaced Sentence :",replace);

let arr_sentence = string.split("");
console.log("Sentence into array :",arr_sentence);


//Final Mini Project 

let employeess = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
        
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
       name: "Karthi",
       department: "IT",
       salary: 65000,
       experience: 6
    }
];

function employee_details(employeess){

   console.log("All Employees :",employeess);

   let searchName = "Priya";

   let searchEmployee = employeess.find(function(employee) {
    return employee.name === searchName;
})
   console.log("Employee By Name :", searchEmployee);

   let dept_filter = employeess.filter(function(emp_department_filter){
    return emp_department_filter.department = "IT";

   })

   console.log("Department Filter :",dept_filter);

   let salary_filter = employeess.filter(function(salary_filter){
    return salary_filter.salary > 50000;
   })

   console.log("Salary more than 50000 :",salary_filter);


   let salary_calc = employeess.reduce(function(sal , tot_sal){
    return sal + tot_sal.salary;
   },0)

   console.log("Total Salary :",salary_calc);

   let highestSalary = employeess.reduce(function(highest, employee) {

    if (employee.salary > highest.salary) {
        return employee;
    }
    else {
        return highest;
    }

});

console.log("Highest Paid Employee:", highestSalary);


   let experiencedEmployees = employeess.filter(function(employee) {
    return employee.experience > 3;
});

console.log("Employees with more than 3 years:", experiencedEmployees);

   let lowToHigh = [...employeess];
   lowToHigh.sort(function(sal1, sal2) {
    return sal1.salary - sal2.salary;
});

console.log("Salary Low to High:", lowToHigh);


let desc_sal = [...employeess];
desc_sal.sort(function(sal_1,sal_2){
return sal_2.salary - sal_1.salary;
});

console.log("Salary High to Low :",desc_sal);


let totalEmployees = employeess.length;

let averageSalary = salary_calc / totalEmployees;
console.log("Details :");
console.log("Total Employees :", totalEmployees);
console.log("Total Salary :",salary_calc);
console.log("Highest Salary :",highestSalary.salary);
console.log("Average Salary :",averageSalary);
   
}
employee_details(employeess);