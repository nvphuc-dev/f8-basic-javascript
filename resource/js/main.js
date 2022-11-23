/* Khai báo biến*/
// var fullName = 'Nguyễn Văn Phúc';
// var age = 35;

/*alert() - gọi hàm thông báo*/
// alert(fullName);
// alert(age);

/* -----------------------------------------------
 Comment trong JS
-------------------------------------------------- */
/*
 1. Mục đích sử dụng
	- Ghi chú
	- Vô hiệu hóa code
 2. Loại comment
	- Comment 1 dòng
	- Comment nhiều dòng
*/

/* -----------------------------------------------
 Một số hàm build-in (hàm xây dựng sẵng)
-------------------------------------------------- */
/*
 1. Alert - thông báo trên cửa sổ windows
 2. Console - in thông báo trên cửa sổ Console của dev tool
 3. Confirm - bật hộp thoại xác nhận điều gì đó.
 4. Prompt - bật hộp thoại cho phép nhập vào input
 5. Set timeout - truyền vào 1 function và thực thi mã sau một khoản thời gian (miliseconds), chỉ chạy 1 lần
 6. Set interval - truyền vào 1 function và thực thi mã sau một khoản thời gian (miliseconds), lặp lại nhiều lần.
*/
// alert('Hello World!')
// console.log(); console.warn(); console.error();
// confirm('Bạn đã trên 18 tuổi?);
// prompt('Nhập số tuổi của bạn:');
/*
setTimeout(function(){
	alert('Hiển thị thông báo sau 2 giây.')
}, 2000);
*/
// setInterval(function(){
//     console.log('Hiển thị thông báo lặp lại sau mỗi 2 giây. ' + Math.random());
// }, 2000);

/* -----------------------------------------------
 Toán tử trong JS - JavaScript Operators
-------------------------------------------------- */
/*
 1. Toán tử số học - Aritmetic
 2. Toán tử gán - Assignment
 3. Toán tử so sánh - Comparison
 4. Toán tử logic - Logical
*/
// Toán tử số học: +, -, *, /, %
// var a = 4 + 2;
// console.log(a);

// Toán tử gán: a = xxx;
// var name = "Teresa Teng";

// Toán tử so sánh: ==, >=, <=, >, <
/*
var a = 6;
var b = 6;
if(a == b){
	console.log('a = b');
}else if(a > b){
	console.log('a > b');
}else{
	console.log('a < b');
}
*/

// Toán tử logic: &&, ||, !value
/*
var a = 1;
var b = 2;
if(a > 0 && b > 0){
	console.log('a và b lớn hơn 0');
}
if(a > 0 || b > 0){
	console.log('Thoải điều kiện');
}

console.log(!true);
console.log(!0);
*/

// 1. Toán tử số học - Aritmetic
// let a = 4;
// let b = 24;
// let x = 4 + 24;
// let z = b - a;
// let e = b * a;
// let c = b / a;
// let d = b % a;
// console.log(x);
// console.log(z);
// console.log(e);
// console.log(c);
// console.log(d);
// a++;
// let h = a;
// console.log(h);
// b--;
// let t = b;
// console.log(t);
// let f = 5;
// let k = f ** 2;
// console.log(k);
// let l = Math.pow(f, 2);
// console.log(l);

// 2. Toán tử ++ --
// Prefix
// ++a;
// console.log(a);
// --a;
// var output = ++a;
// console.log('output: ', output);

// Postfix
// var output = a++;
// var output = a--;
// console.log('output: ', output);
// console.log('a: ', a);

// 3. Toán tử gán
// let a = 1; // vế phải gán cho vế trái
// a = a + 2;
// console.log(a); // yêu cầu cho kết quả a = 3, không thay đổi giá trị ban đầu
// 4. Toán tử gán
// var firstName = 'Kenvin';
// var lastName = 'Nguyen';
// console.log(firstName + ' ' + lastName);

// 4. Toán tử so sánh
// var a = 1;
// var b = 2;
// if(a == b){
// 	console.log('Điều kiện ĐÚNG.');
// } else {
// 	console.log('Điều kiện SAI.');
// }

// 5. Toán tử so sánh
// var a = 1;
// var b = 2;
// if(a == b){
// 	console.log('Điều kiện ĐÚNG.');
// } else {
// 	console.log('Điều kiện SAI.');
// }

// Toán tử so sánh và câu lệnh điều kiện:
// let a = 1;
// let b = 2;
// let result = a < b && a > 0;
// console.log(result);

/* -----------------------------------------------
 Kiểu dữ liệu trong JS - JavaScript Data Types
-------------------------------------------------- */
/*
1. Dữ liệu nguyên thủy - Primitive Data
	- Number
	- String
	- Boolean
	- Undedined
	- Null
	- Symbol
2. Dữ liệu phức tạp - Complex Data
	- Function
	- Object
*/
// Number type
//var x1 = 34.00; // Written with decimals
//var x2 = 65; // Written without decimals
//var x3 = 123e5; // 12300000

// String type
//let carName1 = "Volvo XC60";   // Using double quotes
//let carName2 = 'Volvo XC60';   // Using single quotes

// Boolean type
//let isSuccess = true;
// let x = 5;
// let y = 5;
// let z = 6;
// console.log(x == y);
// console.log(x == z);

// Undedined type
//let age; // Value is undefined, type is undefined
//age = undefined;    // Value is undefined, type is undefined
//console.log(age);

// Null type
//let isNull = null; // nothing

// Symbol
//let id = Symbol('id'); // unique
//let id2 = Symbol('id'); // unique
//console.log(id === id2);

// Function
// let myFunction = function(p1, p2){
// 	return p1 * p2;
// }
// console.log(myFunction(5, 5));

// Object types (object & array)
// let myObject = {
// 	name: 'Kenvin Nguyen',
// 	age: 35,
// 	address: 'Quang Ngai',
// 	myFunction: function () {
// 		// something...
// 	}
// };
// console.log('myObject', myObject);

// let myArray = ['Javascript', 'PHP', 'Python', 'Ruby'];
// console.log(myArray);
// console.log(typeof myArray); // Kiểm tra kiểu dữ liệu


/* -----------------------------------------------
 Chuỗi - JavaScript Strings
-------------------------------------------------- */
// Tạo chuỗi
// let fullName = "Kenvin Nguyen"; // Cách 1 (typeof là string)
// let fullName2 = new String('Kenvin Nguyen'); // Cách 2 (typeof là object)

// Sử dụng backslash (\)
// let text = 'Anh em ta là \'Siêu Nhân\''; // \' --> '
// let text2 = 'Đây là dấu slash \\'; // \\ --> \
// console.log(text2);

// Xem độ dài chuỗi
// let text = 'Kenvin Nguyen';
// console.log(text.length);

// Template string ES6
// let firstName = 'Kenvin';
// let lastName = 'Teresa';
//console.log('Tôi là: ' + firstName + ' ' + lastName); // cách bình thường
//console.log(`Xin chào: ${firstName}, ${lastName}!`); // sử dụng template string es6
// let price = 10;
// let VAT = 0.25;
// let total = `Tổng: ${(price * (1 + VAT)).toFixed(2)}`;
// console.log(total);

/* -----------------------------------------------
 Làm việc với chuỗi
-------------------------------------------------- */
// length
// let myString = 'Học JS tại F8';
// let myString2 = 'Học JS tại JS F8';
// let myString3 = '   Học JS tại F8    ';
// console.log(myString.length);

// Find index
// let isFound = myString.search('JS');
// if(isFound != -1){
// 	console.log(`Tìm thấy 'JS' tại vị trí ${isFound} của chuỗi.`);
// } else {
// 	console.log(`Không tìm thấy 'JS' trong chuỗi trên.`);
// }

// let myString2 = 'Học JS tại JS JS F8 JS';
// console.log(myString2.indexOf('JS', 6));
// console.log(myString2.lastIndexOf('JS'));

// Cut string
// console.log(myString.slice(4, 6));

// replace
// console.log(myString.replace('JS', 'Javascript'));
// console.log(myString2.replace(/JS/g, 'Javascript'));

// convert
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());

// trim
// console.log(myString3.trim());

// split
// let languages = 'Javascript, PHP, Ruby';
// console.log(languages.split(', '));
// console.log(languages.split(''));

// Get a character by index
// const fullName = 'Kenvin Nguyen';
// console.log(fullName.charAt(0));

/* -----------------------------------------------
 Làm việc với số
-------------------------------------------------- */
// Tạo số
// let age = 18;
// const PI = 3.1415926535;
// let otherNumber = new Number(9);
// result = 20 / 'Abc';
// console.log(isNaN(result));

// Number method
// console.log(age.toString());
// console.log(PI.toFixed(2));

/* -----------------------------------------------
 Mảng
-------------------------------------------------- */
// Tạo mảng
// let languages = [
// 	'Javascript',
// 	'PHP',
// 	'Ruby'
// ];
// console.log(Array.isArray(languages));
// console.log(languages instanceof Array);

// Truy xuất mảng
// const cars = ['Saab', 'Volvo', 'BMW'];
// console.log(cars.length); // Độ đài mảng
// console.log(cars[0]); // Lấy phần tử theo index

// array methods
// let cars = ["Saab", "Volvo", "BMW"];
// console.log(cars.toString());
// console.log(cars.join(', '));

// pop() Xóa phần tử cuối cùng của mảng, và trả lại phần tử đã xóa.
// console.log(cars.pop());
// console.log(cars);

// push() thêm 1 hay nhiều phần tử vào cuối mảng và trả về độ dài của mảng mới
// console.log(cars.push('Toyota', 'Honda'));
// console.log(cars);

// shift() Xóa phần tử đầu tiên của mảng, và trả lại phần tử đã xóa.
// console.log(cars.shift());
// console.log(cars);

// unshift() thêm 1 hay nhiều phần tử vào đầu mảng và trả về độ dài của mảng mới
// console.log(cars.unshift('Toyota', 'Honda'));
// console.log(cars);

// splice() thêm các phần tử vào một mảng
// cars.splice(1, 0, 'Toyota', 'Honda');
// console.log(cars);

// slice() Cắt phần tử của mảng thành một mảng mới
// let cars2 = cars.slice(1);
// console.log(cars2);
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);

// concat - nối mảng
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const others = ["Kenvin", "Teresa"];
// const myChildren = myGirls.concat(myBoys);
// const myFamily = myGirls.concat(myBoys, others);
// console.log(myChildren);
// console.log(myFamily);

/* -----------------------------------------------
 Hàm (Functions)
-------------------------------------------------- */
/*
1. Hàm?
	- Một khối mã
	- Làm 1 việc cụ thể

2. Loại hàm:
	- Built-in
	- Tự định nghĩa

3. Tính chất:
	- Không thực thi khi định nghĩa
	- Sẽ thực thi khi được gọi
	- Có thể nhận tham số
	- Có thể trả về 1 giá trị

4. Tạo hàm đầu tiên
	(Đặt tên hàm nên theo quy tắc)
*/
// Định nghĩa hàm
// function showDialog(){
// 	alert('Xin chào bạn!');
// }
// Gọi hàm
// showDialog();

/* Tham số hàm
1. Tham số?
	- Định nghĩa?
	- Kiểu dữ liệu?
	- Tính Private
	- 1 tham số
	- Nhiều tham số

2. Truyền tham số
	- 1 tham số
	- Nhiều tham số

3. Arguments?
	- Đối tượng arguments
	- Giới thiệu vòng lặp for of
*/
// Định nghĩa hàm và truyền tham số
// function writeLog(message) {
// 	console.log(message);
// }
// Gọi hàm và truyền đối số (giá trị) cho tham số
// writeLog('Xin chào bạn!');

// Arguments - Sẽ nhận các đối số truyền vào cho hàm mà không cần gắng tham số hàm
function writeLog() {
	// console.log(arguments);
	let myString = '';
	for(let param of arguments) {
		myString += `${param} - `;
	}
	console.log(myString);
}
writeLog('Log 1', 'Log 2', 'Log 3');