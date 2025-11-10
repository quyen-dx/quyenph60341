//1. Biến và Scope (let, const)
//bai 1
// Sửa đoạn code sau để hoạt động đúng
for (let i = 0; i < 3; i++) {   //thay var = let
  setTimeout(function () {
    console.log(i); // Hiện tại in ra 3,3,3
  }, 100);
}
// Yêu cầu: Sửa để in ra 0,1,2

// ========================

//bai 2
// Tạo một object student với const
// Thêm thuộc tính điểm và in ra
const student = {
  name: "ThuyTien",
  age: 20,
};

// Thực hiện các thao tác sau:
// 1. Thêm thuộc tính grade với giá trị "A"
student.grade = "A";
// 2. Thay đổi tuổi thành 21
student.age = 21;
// 3. In ra toàn bộ thông tin student
console.log(JSON.stringify(student));



//2. Template Literals
//Bài 1: Tạo email template
// Tạo template cho email thông báo
const user = {
  firstName: "Nguyen",
  lastName: "Van A",
  product: "Laptop Dell XPS",
  price: 25000000,
  orderDate: "2024-01-15",
};

// Tạo template string cho email
const {firstName, lastName, product, price, orderDate} = user;
const emailTemplate = ` 
    <div class="emailUser">
        <p>Họ tên: ${firstName} ${lastName}</p>
        <p>Tên sản phẩm: ${product}</p>
        <p>Giá: ${price}</p>
        <p>Ngày: ${orderDate}</p>
    </div>
`; // Viết template ở đây

console.log(emailTemplate);

//Bài 2: Tạo HTML template

// Tạo HTML template cho card sản phẩm
const product2 = {
  name: "iPhone 15",
  price2: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product2.price2 * (1 - product2.discount / 100);

const {name, price2, discount, inStock} = product2;
// Tạo template HTML
const productCard = `
    <div class="card">
        <p>Tên sản phẩm: ${name}</p>
        <p>Giá: ${price2}</p>
        <p>Giảm: ${discount}%</p>
        <p>Giá sau khi giảm: ${finalPrice}</p>
        <p>Tình trạng: ${inStock ? "Còn hàng" : "Hết hàng"}</p>
    </div>
`; // Viết template ở đây

console.log(productCard);


//3. Enhanced Object Literals
//Bài 1: Sử dụng property và method shorthand

// Viết lại object sau sử dụng ES6 enhanced object literals
const width = 100;
const height = 200;
const color = "red";

const rectangle = {
  width,
  height,
  color,
  calculateArea () {
    return this.width * this.height;
  },
  describe () {
    return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
  },
};
console.log(rectangle.calculateArea());
console.log(rectangle.describe());


//Bài 2: Sử dụng computed propertiesobject configuration với computed property names
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

// Tạo object config với:
// - key: `api_${env}_${version}`
// - key cho từng feature: `feature_${featureName}`
// - method: `get${env}Config()`

const config = {
  // Viết code ở đây
  [`api_${env}_${version}`]: "https://api.example.com",

  [`get${env}Config`](){
    return `Đây là config ${env}`;
  },
};
features.forEach((feature) =>{
    config[`feature_${feature}`] = true;
  })
console.log(config);
console.log(config.getproductionConfig());