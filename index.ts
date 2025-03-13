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

// function type ~ mô tả tham số và kết quả trả về của function (params , return)

/**
 * 
  function name(): return_type {
  }
 */
function sayHello(name: string) {
  console.log(" name:", name);
}

sayHello("Nguyen Van A"); //ok
// sayHello(123); // lỗi => name phải là string

function sum(a: number, b: number): [number, number] {
  //   return a + b;
  //   return "yes";
  return [2, 2];
}
sum(1, 2); // ok
// sum("1", 2); // lỗi => a phải là number

// union type => tạo 1 biến có thể chứa nhiều kiểu dữ liệu khác nhau

// number | string

let idMovie: number | string = 123;
idMovie = "123";
 
//idMovie = true;

// any type => không kiểm tra kiểu dữ liệu

let someValue: any = 123;
someValue = "123";
someValue = true;
