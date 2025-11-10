//Bài tập 1: Chuyển đổi hàm
// Function 1
const  multiply = (a, b) => a * b;

// Function 2
const isPositive =(number) => number >= 0;


// Function 3
const getRandomNumber = () => Math.random();


// Function 4
document.addEventListener("click",  () => {
  console.log("Clicked!");
});


//Bài tập 2: Sử dụng Default Parameters
const createUser = (name = "Anonymous", age = 18, isAdmin = false) =>{
  return {
    name,
    age,
    isAdmin,
  };
};
console.log(createUser());


//bài tập 3:Rest và Spread
const mergeArrays = (...Arrays) =>{
    return [].concat(...Arrays);
}
const Arr1 = [1,2];
const Arr2 = [3,4];
const Arr3 = [5,6];
console.log(mergeArrays(Arr1,Arr2,Arr3))


function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4));
function createProduct(name, price = 0, category = "general") {
    return { name, price, category };
}
console.log(createProduct("Laptop", 1000)); 

//Bài tập 4: Ứng dụng thực tế – shoppingCart
function shoppingCart(customerName, ...products) {
    return {
        customerName,
        products,
        total: products.reduce((sum, product) => sum + (product.price || 0), 0)
    };
}
const cart = shoppingCart(
    "abc",
    createProduct("Laptop", 1000),
    createProduct("Mouse", 50),
    createProduct("Keyboard", 100)
);

console.log(cart);