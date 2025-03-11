// typescript => javascript + types

let number = 20; // number

// number = "yes" => lỗi

console.log(" number:", number);

// khi khai báo biến có kiểu dữ liệu number => chỉ có thể update bằng number

let account: string = "admin"; // string
account = "user";

let isLogin: boolean = true; // boolean
let isMarried: null = null; // null
let is_married: undefined = undefined; // undefined

// interface ~ mô tả object

interface Student {
  name: string;
  age: number;
}

let sv1: Student = {
  name: "Nguyen Van A",
  age: 20,
};

let sv2: Student = {
  name: "Nguyen Van B",
  age: 21,
};

// array => Array<type>

let numbers: Array<number> = [1, 2, 3, 4, 5];
let booleans: Array<boolean> = [true, false, true, false];

let listStudent: Array<Student> = [sv1, sv2, { name: "Nguyen Van C", age: 22 }];
