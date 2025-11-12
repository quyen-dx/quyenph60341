//Bài tập Array Destructuring
//Bài 1: Viết hàm trả về phần tử đầu tiên và cuối cùng của mảng
const getFirstLast = arr => ([arr[0], arr.at(-1)])
console.log(getFirstLast([1, 2, 3, 4]));

//Bài 2: Hoán đổi vị trí phần tử thứ 2 và thứ 4 trong mảng
const swapElements = arr => ([arr[0], arr[3] = arr[3], arr[1]], arr);
console.log(swapElements([1, 2, 3, 4, 5]));


//Bài tập Object Destructuring
//Bài 1: Viết hàm extract thông tin user
const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};
const getUserInfo = ({ personalInfo: { name, contact: { email, phone } } }) => ({ name, email })
console.log(getUserInfo(user));



//Bài 2: Viết hàm với tham số mặc định
const createProduct = ({ name, price, category = "general", inStock = true }) => ({ name, price, category, inStock });
const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);


//2. Lập trình bất đồng bộ
//Bài tập Promises
//Bài 1: Viết hàm delay trả về Promise
const delay = (ms) => new Promise(re => setTimeout(re, ms))
delay(2000).then(() => console.log("đã chạy sau deley 2s"));

//Bài 2: Viết hàm fetchMultipleData
const fetchMultipleData = (urls) =>
  Promise.all(urls.map(url => fetch(url).then(res => res.json())));
fetchMultipleData(["https://jsonplaceholder.typicode.com/users/1", "https://jsonplaceholder.typicode.com/users/2"]).then((users) =>
  console.log(users)
);



//ài tập Async/Await
//Bài 1: Viết lại callback hell thành async/await
// Viết lại hàm này sử dụng async/await
function getOrder(orderId) {
  return new Promise(re => {
    setTimeout(() => re({ id: orderId, userId: 5, productIds: [1, 2] }), 500);
  });
}
function getUser(userId) {
  return new Promise(re => {
    setTimeout(() => re({ id: userId, name: "Quyen" }), 500);
  });
}
function getProducts(productIds) {
  return new Promise(re => {
    setTimeout(() => re(["Product 1", "Product 2"]), 500);
  });
}
async function processOrder(orderId, callback) {
  try {
    const order = await getOrder(orderId);
    const user = await getUser(order.userId);
    const products = await getProducts(order.productIds);

    callback({ order, user, products });
  } catch (err) {
    console.error("Error processing order:", err);
    callback(null); // hoặc callback({ error: err })
  }
}
processOrder(1, result => {
  console.log(result);
});

//Bài 2: Xử lý lỗi với async/await
// ----------------------------
// Giả lập API trả về Promise
// ----------------------------
async function fakeApi(id) {
  if (id === 0) throw new Error("Invalid ID"); // giả lập lỗi
  return { id, name: "Test User" };
}

// ----------------------------
// Hàm safeApiCall dùng async/await + try/catch
// ----------------------------
async function safeApiCall(apiFunction, ...args) {
  try {
    const result = await apiFunction(...args);
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error };
  }
}

// ----------------------------
// Gọi thử
// ----------------------------
(async () => {
  const successCall = await safeApiCall(fakeApi, 1);
  console.log(successCall);
  // { success: true, data: { id: 1, name: 'Test User' } }

  const failedCall = await safeApiCall(fakeApi, 0);
  console.log(failedCall);
  // { success: false, error: Error: Invalid ID }
})();



