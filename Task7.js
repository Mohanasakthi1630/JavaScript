//Task-1

fetch("https://fakestoreapi.com/products")

    .then(response => response.json())

    .then(products => {

        products.forEach(product => {

            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
        })

        products.map(function(new_array){

        console.log("New Array Title :",new_array.title);
        console.log("New Array Price :",new_array.price);

        })


        let product_greater_price =products.filter(function(product_price){

            return product_price.price > 100;
            
        })

        console.log("Product price greater than 100 :",product_greater_price);


        let electronic_products = products.find(function(find){
            console.log("Electronic Products :");
            return find.category = "electronics"
        })

        console.log(electronic_products);

        let total_price = products.reduce(function(sum , total){
            return sum + total.price;
        },0)

        console.log("Total Price :",total_price);


        let highest_price = products.sort(function(a , b){
            return b.price - a.price;
        })

        console.log("Highest price to Lowest :",highest_price);




    })

.catch(error =>{

    console.warn("Api Error",error.message);
})

.finally(() =>{

    console.log("Api Successfully Completed .");
})


//Task-2


console.log("===== PRODUCTS DASHBOARD =====")
fetch("https://fakestoreapi.com/products")
 
    .then(response => response.json())

   

    .then(products => {

        let total_products = products.length;
        console.log("Total Products:",total_products );


        function countCategory(category) {

            let result = products.filter(product => {
                return product.category === category;
            });

            return result.length;
        }

        let Electronics = countCategory("electronics");
        let Jwellary = countCategory("jewelery");
        let MensClothing = countCategory("men's clothing");
        let womensClothing = countCategory("women's clothing");

        console.log(`Electronics : ${Electronics}`);
        console.log(`Jwellery : ${Jwellary}`);
        console.log(`Men's Clothing : ${MensClothing}`);
        console.log(`Women's Clothing : ${womensClothing}`);


        let highest_prices = products.map(product => {
            return product.price;
        });

        highest_prices.sort((a, b) => {
            return b - a;
        });

        console.log(`Highest Price : $ ${highest_prices[0]}`);


        let lowest_prices = products.map(product => {
            return product.price;
        });

        lowest_prices.sort((a, b) => {
            return a - b;
        });

        console.log(`Lowest Price : $ ${lowest_prices[0]}`);


        let total_price = products.reduce(function(sum , total){
            return sum + total.price;
        },0)

        console.log("Total Price :",total_price);

        let average_price = total_price / products.length;

        console.log(`Average price : $ ${average_price}`);


    })


//Task-3

let userLink = "https://jsonplaceholder.typicode.com/users";
let postsLink ="https://jsonplaceholder.typicode.com/posts";

fetch(userLink)

.then((data =>{
    console.log(data);
    return data.json();
}))

.then((js_data)=>{
    console.log(js_data);

    let user_name = js_data.map(function(userName){
        return userName.username ;
    })

    console.log("User Names :",user_name);

    js_data.forEach((c)=>{
        console.log("Name :",c.name);
        console.log("E-mail :",c.email);
    })

    let user_by_id = js_data.find(function(id){

        return id.id = 105;
    })
    
    console.log("User with id 105 :",user_by_id);

    let city = js_data.filter(function(City){

        return City.address.city === "Gwenborough";
    })

    console.log("User City :",city);
})

fetch(postsLink)

.then(post =>{
    console.log(post);
    return post.json();
} )

.then(post_data =>{
    console.log(post_data);

    let posts_by_id = post_data.filter(function(user_id){

        return user_id.userId === 1;
    })
    console.log("Post written by user Id 1 :",posts_by_id);

    let post_count = post_data.filter(function(count){

        return count.userId === 1;
    })
    let postCount = post_count.length;

    console.log("Posts created by user Id 1 :",postCount);


    let title = post_data.find((title)=>{

        return title.title.length > 50
    })
    console.log("Title greater than 50 characters :",title);
    
})
   

//Task-4

let find_Products = "https://fakestoreapi.com/products";

fetch(find_Products)

.then(response =>{
    console.log(response);
    return response.json();
})

.then(products =>{

    console.log(products);

    let productCategory = prompt("Enter the product category :");

    let maximumPrice = prompt("Enter the maximum price :");

    let result = products.filter((product)=>{

        return product.category === productCategory && 
        product.price <= maximumPrice;
    }) 

    console.log("filtered Prodects :",result);
})


//Task-5


fetch("https://fakestoreapi.com/products")

.then(response => response.json())

.then(products => {

    console.log("========== Available Products ==========");

    products.forEach(product => {
        console.log(
            "Id:", product.id,
            "Name:", product.title,
            "Price:", product.price
        );
    });

    let cart = [];

    let id1 = Number(prompt("Enter Product 1 ID:"));
    let id2 = Number(prompt("Enter Product 2 ID:"));

    let product1 = products.find(product => product.id === id1);
    let product2 = products.find(product => product.id === id2);

    if (product1) {
        cart.push(product1);
    }

    if (product2) {
        cart.push(product2);
    }

    let total = cart.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    let discount = 0;

    if(total > 100){
        discount = total * 10/100;
    }
    else if(total > 200){
        discount = total * 20/100;
    }

    let final_Amount = total - discount;

    console.log("======== CART ========");

    cart.forEach(product => {
        console.log("Product :", product.title);
        console.log("Price: $" + product.price);
    });

    console.log("Total : $",total);
    console.log(`Discount : ${discount} %`);
    console.log("Final Amount :$",final_Amount);


})


//Task-6

fetch("https://fakestoreapi.com/products")

.then(response =>{
    console.log(response);
    return response.json();
})

.then(report=>{
    console.log(report);

    let Total_Products = report.map((total)=>{

        return total.length;
    })
    console.log("Total Products :",Total_Products.length);

    report.forEach(display => {
        console.log(
            "Id :",display.id,
            "Name :",display.title,
            "Price :",display.price,
        )
    });


    let products_names = report.map((product)=>{
        return product.title;
    })

    console.log("Products Names :",products_names);

    let expensive_Product = report.filter((product)=>{
        return product.price > 100;
    })

    console.log("Expensive Products :",expensive_Product);

    let electronic_Products = report.find((product)=>{
        return product.category === "electronics";
    })
    console.log("Electronic Products :",electronic_Products);


    let total_Price = report.reduce((sum , total)=>{

        return sum + total.price;
    },0)

    console.log("Total Price :",total_Price);

    let anyAbove500 = report.some(product => {
        return product.price > 500;
    });

    console.log("Any Product Above $500:", anyAbove500);

    let allAbove1 = report.every(product => {
        return product.price > 1;
    });

    console.log("All Products Above $1:", allAbove1);


    let high_low = report.sort((a , b)=>{
        return b.price - a.price;
    })

    console.log("Highest to Lowest Price :", high_low);



    
})

.catch(error=>{
    console.warn("Error :",error);
})

.finally(()=>{
    console.log("Successfully Completed.");
})