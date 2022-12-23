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
// function writeLog() {
// 	// console.log(arguments);
// 	let myString = '';
// 	for(let param of arguments) {
// 		myString += `${param} - `;
// 	}
// 	console.log(myString);
// }
// writeLog('Log 1', 'Log 2', 'Log 3');

/* -----------------------------------------------
 Object
-------------------------------------------------- */
// let myInfo = {
// 	'name': 'Kenvin Nguyen',
// 	'age': 25,
// 	'email': 'kenvin@gmail.com',
// 	'address': 'HCM VN'
// };
// //myInfo.sex = 'Nam'; // myInfo['sex'] = 'Nam';
// // delete myInfo.address;
// console.log(myInfo);

// object contructor
// Quy ước đặt tên cho contructor là viết hoa chữ cái đầu.

// function User(firstName, lastName, avatar) { // Function declartion
// let User = function(firstName, lastName, avatar) { // Function expression
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.avatar = avatar;
// 	this.getName = function() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// }
// let author = new User('Kenvin', 'Nguyen', 'avatar.jpg');
// let user = new User('Teresa', 'Teng', 'avatar.jpg');
// thêm thuộc tính/phương thức riêng
// author.title = 'Bang Chủ Cái Bang';
// user.comment = 'I love BCCB!';
// console.log(author);
// console.log(user);
// console.log(author.getName());
// console.log(user.getName());

// object prototype
// User.prototype.className = 'F8';
// console.log(author.className);
// console.log(user.className);

/* -----------------------------------------------
 Date
-------------------------------------------------- */
// let d = new Date();
// console.log(d);
// console.log(d.getFullYear());

/* -----------------------------------------------
 Câu lệnh if, else
-------------------------------------------------- */
// var date = new Date();
// var time = date.getHours();
// if (time < 10) {
// 	greeting = "Good morning";
// } else if (time < 20) {
// 	greeting = "Good day";
// } else {
// 	greeting = "Good evening";
// }
// console.log(greeting);

/* -----------------------------------------------
 Câu lệnh switch
-------------------------------------------------- */
// Phương thức getDay() trả về ngày trong tuần dưới dạng một số từ 0 đến 6.
// switch (new Date().getDay()) {
// 	case 0:
// 		day = "Sunday";
// 		break;
// 	case 1:
// 		day = "Monday";
// 		break;
// 	case 2:
// 		 day = "Tuesday";
// 		break;
// 	case 3:
// 		day = "Wednesday";
// 		break;
// 	case 4:
// 		day = "Thursday";
// 		break;
// 	case 5:
// 		day = "Friday";
// 		break;
// 	case 6:
// 		day = "Saturday";
// }
// console.log(day);

// Nếu hôm nay không phải là Thứ Bảy (6) cũng không phải Chủ Nhật (0), hãy viết một tin nhắn mặc định:
// switch (new Date().getDay()) {
// 	case 6:
// 		text = "Today is Saturday";
// 		break;
// 	case 0:
// 		text = "Today is Sunday";
// 		break;
// 	default:
// 		text = "Looking forward to the Weekend";
// }
// console.log(text);

// Trong trường hợp ví dụ này, 4 và 5 chia sẻ cùng một khối mã và 0 và 6 chia sẻ một khối mã khác:
// switch (new Date().getDay()) {
// 	case 4:
// 	case 5:
// 		text = "Soon it is Weekend";
// 		break;
// 	case 0:
// 	case 6:
// 		text = "It is Weekend";
// 		break;
// 	default:
// 		text = "Looking forward to the Weekend";
// }
// console.log(text);

/* -----------------------------------------------
 Toán tử 3 ngôi
-------------------------------------------------- */
// var course = {
// 	name: 'Javascript',
// 	coin: 250
// }

// if (course.coin > 0) {
// 	console.log(`${course.coin} Coin`);
// } else {
// 	console.log('Miễn phí');
// }

// var result = course.coin > 0 ? `${course.coin} Coin` : 'Miễn phí';
// console.log(result);

/* -----------------------------------------------
 Vòng lặp
-------------------------------------------------- */
// for
// for(var i = 1; i <= 10; i++){
// 	console.log(i);
// }
// let myArray = [
// 	'Javascript',
// 	'PHP',
// 	'Java',
// 	"Dart"
// ];
// let arrayLength = myArray.length;
// for(let i = 0; i < arrayLength; i++){
// 	console.log(myArray[i]);
// }

// For/in
// let myInfo = {
// 	name: 'Kenvin Nguyen',
// 	age: 35,
// 	address: 'Quang Ngai'
// }
// for(let key in myInfo){
// 	console.log(myInfo[key]);
// }

// for/of
// for(let value of Object.values(myInfo)){
// 	console.log(value);
// }

// while
// let i = 0;
// while(i < 10){
// 	console.log(i);
// 	i++;
// }

// do/while
// let i = 0;
// let isSuccess = false;
// do{
// 	console.log('Nạp thẻ lần ' + i);
// 	//thành công
// 	if(false){
// 		isSuccess = true;
// 	}
// 	i++;
// }while(!isSuccess && i <=3)

// break & continue
// for(let i = 0; i < 10; i++){
// 	if(i % 2 !== 0 ){
// 		continue;
// 	}
// 	console.log(i);
// }

// Vòng lặp lồng nhau - nested loop
// let array = [
// 	[1, 2],
// 	[3, 4],
// 	[5, 6]
// ];
// for(let i = 0; i < array.length; i++){
// 	for(let j = 0; j < array[i].length; j++){
// 		console.log(array[i][j]);
// 	}
// }

// ex loop
// in ngược từ 100 đến 1
// for(let i = 100; i > 0; i--){
// 	console.log(i);
// }

// in tăng 5 sau mỗi lần
// for(let i = 0; i <= 100; i += 5){
// 	console.log(i);
// }
// for(let i = 100; i > 0; i -= 5){
// 	console.log(i);
// }

// Làm việc với mảng 2
// Array method:
// 	forEach()
// 	every()
// 	some()
// 	find()
// 	filter()
// 	map()
// 	reduce()

// let courses = [
// 	{
// 		id: 1,
// 		name: 'Javascript',
// 		coin: 250
// 	},
// 	{
// 		id: 2,
// 		name: 'HTML, CSS',
// 		coin: 0
// 	},
// 	{
// 		id: 3,
// 		name: 'PHP',
// 		coin: 450
// 	},
// 	{
// 		id: 4,
// 		name: 'Python',
// 		coin: 350
// 	},
// 	{
// 		id: 5,
// 		name: 'Dark',
// 		coin: 250
// 	},
// 	{
// 		id: 6,
// 		name: 'React',
// 		coin: 550
// 	}
// ];

// Duyệt qua từng phần tử của mảng forEach
// courses.forEach(function(cource, index){
// 	console.log(index, cource);
// });

// every() trả về Boolean Gần giống vs && (đúng khi tất cả cùng đúng)
// let isFree = courses.every(function(cource, index){
// 	console.log(index);
// 	return cource.coin === 0;
// });
// console.log(isFree);

// some() trả về Boolean ngược lại với every() => || (sai khi tất cả cùng sai)
// let isFree = courses.some(function(cource, index){
// 	console.log(index);
// 	return cource.coin === 0;
// });
// console.log(isFree);

// Tìm kiếm find() chỉ trả về 1 phần tử được tìm thấy.
// let cource = courses.find(function(cource, index){
// 	return cource.name === 'Javascript';
// });
// console.log(cource);

// Tìm kiếm filter() chỉ trả về tất cả phần tử được tìm thấy.
// let listcourses = courses.filter(function(cource, index){
// 	return cource.name === 'Javascript';
// });
// console.log(listcourses);

// map(), chỉnh sửa hay thổi đổi 1 array
// function courceHandler(course, index, originArray){
// 	// console.log(course);
// 	// return course;
// 	return {
// 		id: course.id,
// 		name: `Khóa học: ${course.name}`,
// 		coin: course.coin,
// 		coinText: `Giá: ${course.coin}`,
// 		index: index,
// 		originArray: originArray
// 	};
// }
// let newcourses = courses.map(courceHandler);
// console.log(newcourses);

// reduce, làm việc khi muốn nhận về 1 giá trị duy nhất
// Vd tính tổng coin?
//let totalCoin = 0; //1. Tạo biến lưu trữ
//Dùng for
// for(let course of courses){ // 2. Lặp qua các phần tử
// 	totalCoin += course.coin; // 3. Thực hiện lưu trữ
// }

// dùng reduce
// var i = 0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray){
// 	// i++;
// 	let total = accumulator + currentValue.coin;
// 	// console.table({
// 	// 	'Lượt chạy: ': i,
// 	// 	'Biến tích trữ: ' : accumulator,
// 	// 	'Giá khóa học: ' : currentValue.coin,
// 	// 	'Tích trữ được: ' : total
// 	// });
// 	// console.log(currentValue);
// 	return total;
// }
// let totalCoin = courses.reduce(coinHandler, 0);

// Viết gọn
// function coinHandler(accumulator, currentValue){
// 	return accumulator + currentValue.coin;
// }
// let totalCoin = courses.reduce(coinHandler, 0);
// or
// let totalCoin = courses.reduce(function (accumulator, currentValue){
// 	return accumulator + currentValue.coin;
// }, 0);

// ES6
// let totalCoin = courses.reduce((a, b) => a + b.coin, 0);
// console.log(totalCoin);

// reduce qua ví dụ
// let totalCoin = courses.reduce(function(total, course){
// 	return total + course.coin;
// }, 0); // initial value
// console.log(totalCoin);

// let numbers = [250, 0, 450, 350, 250, 550];
// let total = numbers.reduce(function(total, number){
// 	return total + number;
// }); // Không cần truyền biến khởi tạo khi kiểu dữ liệu trùng khớp.
// console.log(total);

// Flat - 'Làm phẳng' mảng từ Depth array - 'Mảng sâu'
// let depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// let flatArray = depthArray.reduce(function(flatOutput, depthItem){
// 	return flatOutput.concat(depthItem);
// }, []);
// console.log(flatArray);

// Lấy ra các khóa học và đưa vào 1 mảng mới
// let topics = [
// 	{
// 		topic: 'Front-end',
// 		courses: [
// 			{
// 				id: 1,
// 				title: 'HTML, CSS'
// 			},
// 			{
// 				id: 2,
// 				title: 'Javascript'
// 			},
// 			{
// 				id: 3,
// 				title: 'VueJS'
// 			},
// 			{
// 				id: 4,
// 				title: 'Angular'
// 			},
// 			{
// 				id: 5,
// 				title: 'ReactJS'
// 			}
// 		]
// 	},
// 	{
// 		topic: 'Back-end',
// 		courses: [
// 			{
// 				id: 1,
// 				title: 'PHP'
// 			},
// 			{
// 				id: 2,
// 				title: 'Java'
// 			},
// 			{
// 				id: 3,
// 				title: 'Ruby'
// 			},
// 			{
// 				id: 4,
// 				title: 'Python'
// 			},
// 			{
// 				id: 5,
// 				title: 'NodeJS'
// 			}
// 		]
// 	}
// ];
// let newCourses = topics.reduce(function (course, topic){
// 	return course.concat(topic.courses);
// }, []);
// console.log(newCourses);


// includes method, phương thức này chỉ tồn tại ở Array và String
//check: console.log(Array.prototype.includes);
// let title = 'Responsive web design';
// console.log(title.includes('web'));

// let courses = ['Javascript', 'PHP', 'Dart'];
// console.log(courses.includes('Ruby'));

// Math object
// console.log(Math.PI);
// console.log(Math.round(1.6));
// console.log(Math.abs(-6));
// console.log(Math.ceil(1.54256));
// console.log(Math.floor(1.54256));
// console.log(Math.random());
// console.log(Math.floor(Math.random() * 10));
// let random = Math.floor(Math.random() * 100);
// let bonus = [
// 	'10 coin',
// 	'20 coin',
// 	'30 coin',
// 	'40 coin',
// 	'50 coin'
// ];
// console.log(bonus[random]);
// if(random < 5){
// 	console.log('Cường hóa thành công!');
// }

// console.log(Math.min(-100, 1, 90, 50, 25));
// console.log(Math.max(-100, 1, 90, 50, 25));

// Hiểu về Javascript Callback Functions | Callback Trong Javascript | Javascript Callback
// Callback
// Là hàm (function) được truyền qua đối số
// Khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại (trong hàm nhận đối số)
// function myFunction(param){
// 	if(typeof param === 'function'){
// 		param('Học lập trình');
// 	}
// }
// function myCallback(value){
// 	console.log('Value:', value);
// }
// myFunction(myCallback);

// Array.prototype.map2 = function(callback){
// 	let output = [], arrayLength = this.length;
// 	for(let i = 0; i < arrayLength; i++){
// 		let result = callback(this[i], i);
// 		output.push(result);
// 	}
// 	return output;
// }
// let courses = [
// 	'Javascript',
// 	'PHP',
// 	'Ruby'
// ];
// let htmls = courses.map2(function(course){
// 	return `<h2>${course}</h2>`;
// });
// console.log(htmls.join(''));

// courses.map(function(course){
// 	console.log(course)
// });

// Empty elements of array?
// let courses = [
// 	'Javascript',
// 	'PHP',
// 	'Ruby'
// ];
// courses.length = 10;
// for (let index in courses){
// 	console.log(courses[index]);
// }

// My forEach() method
// forEach2
// Array.prototype.forEach2 = function(callback){
// 	for (var index in this){ // for in duyệt qua không chỉ element trong mảng mà còn duyệt qua element trong _proto_
// 		if(this.hasOwnProperty(index)){
// 			callback(this[index], index, this);
// 		}
// 	}
// }
// courses.length = 100;
// courses.forEach2(function(course, index, array){
// 	console.log(course, index, array);
// });
// courses.forEach(function(course, index, array){
// 	console.log(course, index, array);
// });

// Ôn lại:
// 1. Object prototype
// 2. for in
// 3. hasOwnProperty // tìm phương thức gần nhất

// My filter() method
// Array.prototype.filter2 = function(callback){
// 	let output = [];
// 	for(let index in this){
// 		if(this.hasOwnProperty(index)){
// 			let result = callback(this[index], index, this);
// 			if(result){
// 				output.push(this[index]);
// 			}
// 		}
// 	}
// 	return output;
// }
// let courses = [
// 	{
// 		name: 'Javascript',
// 		coin: 560
// 	},
// 	{
// 		name: 'PHP',
// 		coin: 850
// 	},
// 	{
// 		name: 'Ruby',
// 		coin: 900
// 	}
// ];
// let filterCourses = courses.filter2(function(course, index, array){
// 	return course.coin > 700;
// });
// let filterCourses = courses.filter(function(course, index, array){
// 	return course.coin > 700;
// });
// console.log(filterCourses);

// My some() method // trả về boonlean
// Array.prototype.some2 = function(callback){
// 	let output = false;
// 	for(index in this){
// 		if(this.hasOwnProperty(index)){
// 			if(callback(this[index], index, this)){
// 				output = true;
// 				break;
// 			}
// 		}
// 	}
// 	return output;
// }
// let courses = [
// 	{
// 		name: 'Javascript',
// 		coin: 560,
// 		isFinished: false
// 	},
// 	{
// 		name: 'PHP',
// 		coin: 850,
// 		isFinished: false
// 	},
// 	{
// 		name: 'Ruby',
// 		coin: 900,
// 		isFinished: false
// 	}
// ];
// let result = courses.some2(function(course, index, array){
// 	return course.isFinished;
// });
// let result = courses.some(function(course, index, array){
// 	return course.isFinished;
// });
// console.log(result);

// My every() method / trả về boonlean tất cả đúng mới đúng
// Array.prototype.every2 = function(callback){
// 	let output = true;
// 	for(let index in this){
// 		if(this.hasOwnProperty(index)){
// 			let result = callback(this[index], index, this);
// 			if(!result){
// 				output = false;
// 				break;
// 			}
// 		}
// 	}
// 	return output;
// }
// let courses = [
// 	{
// 		name: 'Javascript',
// 		coin: 560,
// 		isFinished: true
// 	},
// 	{
// 		name: 'PHP',
// 		coin: 850,
// 		isFinished: false
// 	},
// 	{
// 		name: 'Ruby',
// 		coin: 900,
// 		isFinished: true
// 	}
// ];
// let result = courses.every2(function(course, index, array){
// 	// return course.isFinished;
// 	return course.coin > 500;
// });
// let result = courses.every(function(course, index, array){
// 	return course.isFinished;
// });
// console.log(result);

// Đệ quy là gì? Học về đệ quy! What is recursive? Learn about recursive!
// Yêu cầu
// Cho array = ['a', 'b,', 'c', 'a', 'b,', 'c', 'd'];
// Tạo mảng mới newArray = ['a', 'b', 'c', 'd']; // Không dùng cáo hàm có sẵng
// Sử dụng new Set để sắp xếp và lấy các phần tử duy nhất
// let array = ['a', 'b,', 'c', 'a', 'b,', 'c', 'd'];
// console.log(new Set(array)); // Set là Entries
// console.log([...(new Set(array))]); //Dùng ES6 biến Entries thành mảng

// Sử dụng đệ quy để giài bài toán theo y/c
// Đệ quy là hàm gọi lại chính nó.
// 1. xác định điểm đừng
// 2. có phần xử lý logic => để tạo ra điểm dừng
// Ví dụ count down
// function countDown(num){
// 	if(num > 0){
// 		console.log(num);
// 		return countDown(num - 1);
// 	}
// }
// countDown(3);
// function loop(start, end, callback){
// 	if(start < end){
// 		callback(start);
// 		return loop(start + 1, end, callback);
// 	}
// }
// let array = ['Javascript', 'PHP', 'Ruby'];
// loop(0, array.length, function(index){
// 	console.log(array[index]);
// });
// tính giai thừa
// function giaiThua(num){
	// let output = 1;
	// for (let i = num; i > 0; i--){
	// 	output = output * i;
	// }
	// return output;

	//đệ quy
	// if(num > 0){
	// 	return num * giaiThua(num - 1);
	// }
	// return 1;
// }
// console.log(giaiThua(6));

// HTML DOM
// Có 3 thành phần
// 1. Element
// 2. Attribute
// 3. Text

// JS: browser | server (Nodejs)
// browser: html -> DOM -> WEB API
// let headingNode = document.getElementById('heading');
// let headingNodes = document.getElementsByClassName('heading');
// let headingNode = document.querySelector('.box .heading-3');
// console.log(headingNode);

// let listItemNodes = document.querySelectorAll('.box-1 li');
// let boxNode = document.querySelector('.box-1');
// Công việc 1: sử dụng tới `boxNode`
// ....
// console.log(boxNode);
// Công việc 2: sử dụng tới các li elements là con của `.box-1`
// console.log(boxNode.getElementsByTagName('li'));

// let p = document.querySelector('.paragraph');
// p.title = 'Title';
// p.setAttribute('data-id', 5);

// InnerText vs textContent Property
// let p = document.querySelector('.paragraph');
// console.log(p.innerText); // hiển thị những gì như nhìn thấy
// console.log(p.textContent); // hiển thị những gì nằm trong textNode
// sửa
// p.innerText = 'New Title';

// InnerHTML Propertype
// let boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<h1>New Heading</h1>';
// console.log(document.querySelector('.box h1').innerText);

// Node properties
// let boxElement = document.querySelector('.box-node');
// console.log([boxElement]);

// DOM style
// css dùng - -> background-position
// js camelCase -> backgroundPosition
// let boxElement = document.querySelector('.box-css');
// boxElement.style.width = '200px';
// boxElement.style.height = '100px';
// boxElement.style.backgroundColor = 'green';
// Object.assign(boxElement.style, {
// 	width: '200px',
// 	height: '100px',
// 	backgroundColor: 'green'
// });

// ClassList Property
// add // thêm class, có thể thêm nhiều cách nhau dấu ,
// contains // kiểm tra có tồn tại class hay không
// remove // xóa class
// toggle // nếu có thì xóa bỏ class, nếu không có thì thêm class
// let boxElement = document.querySelector('.box-class');
// setInterval(() => {
// 	boxElement.classList.toggle('txt-blue');
// }, 1000);

// DOM events
// 1. Attribute events // Lắng nghe người dùng

// 2. Assign event using the element node // gáng sự kiện
// let element = document.querySelector('.box-events2');
// element.onclick = function(e){
// 	console.log(e.target);
// }
// let elements = document.querySelectorAll('.box-events2');
// for(let i = 0; i < elements.length; i++){
// 	elements[i].onclick = function(e){
// 		console.log(e.target);
// 	}
// }

// DOM events example
// 1. Input / Select
let inputElement = document.querySelector('input[type="text"]');
inputElement.oninput = function(e){
	console.log(e.target.value);
}

let checkBoxElement = document.querySelector('input[type="checkbox"]');
checkBoxElement.onchange = function(e){
	console.log(e.target.checked);
}

let selectElement = document.querySelector('select');
selectElement.onchange = function(e){
	console.log(e.target.value);
}

// 2. Key up / down
inputElement.onkeydown = function(e){
	switch(e.which){
		case 27:
			console.log('EXIT');
			break;
		case 13:
			console.log('SEND CHAT');
			break;
	}
}

// PreventDefault and StopPropagation
// 1. PreventDefault // loại bỏ hành vi mặc định trên trình duyệt
let aElements = document.links;
for(let i = 0; i < aElements.length; i++){
	aElements[i].onclick = function(e){
		// console.log(e.target.href);
		// nếu là f8 thì cho chuyển trang
		if(!e.target.href.startsWith('https://f8.edu.vn/')){
			e.preventDefault();
		}
	}
}

let ulElement = document.querySelector('.lst-search');
ulElement.onmousedown = function(e){
	e.preventDefault();
}
ulElement.onclick = function(e){
	console.log(e.target);
}

// 2. StopPropagation // loại bỏ sự kiện nổi bột (hành vi lang truyền)
let parentElement = document.querySelector('.eParent');
parentElement.onclick = function(){
	console.log('DIV');
}
let childrenElement = document.querySelector('.eChildren');
childrenElement.onclick = function(e){
	e.stopPropagation();
	console.log('Click Me!');
}

// Event Listener
// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / hủy bỏ lắng nghe
// Đưa ra ví dụ để giai quyết 2 vấn đề trên qua 2 cách xử lý là dùng DOM event ở bài cũ và event listener trong bài mới này.

let btn = document.getElementById('btn-event-listener');

// DOM event - Sử dụng cho các trường hợp đơn giản, khong có nhu cầu gỡ bỏ nó đi
// Xử lý nhiều việc trên 1 event
// btn.onclick = function(){
// 	// việc 1
// 	console.log('Việc 1');
// 	// việc 2
// 	console.log('Việc 2');
// 	// việc 3
// 	alert('Việc 3');
// }
// lắng nghe sau 3s mới thực hiện
// setTimeout(function(){
// 	btn.onclick = function(){
// 		// việc 1
// 		console.log('Việc 1');
// 		// việc 2
// 		console.log('Việc 2');
// 		// việc 3
// 		alert('Việc 3');
// 	}
// }, 3000);

// hủy bỏ sau 3s
// btn.onclick = function(){
// 	// việc 1
// 	console.log('Việc 1');
// 	// việc 2
// 	console.log('Việc 2');
// 	// việc 3
// 	alert('Việc 3');
// }
// setTimeout(function(){
// 	btn.onclick = function(){} //gán sự kiện bằng 1 function rỗng để thay thế cho tác vụ cũ.
// }, 3000);

// event listener - sử dung vs xử lý phức tạp
function viec1(){
	console.log('việc 1');
}
function viec2(){
	alert('việc 2');
}
//lắng nghe
btn.addEventListener('click', viec1);
btn.addEventListener('click', viec2);
//hủy bỏ
setTimeout(function(){
	btn.removeEventListener('click', viec1);
}, 3000);


// JSON (JavaScript Object Notation)
// JSON: Number, String, Boolean, Null, Array, Object
// Stringify: Từ Javascript types -> JSON
// Parse: Từ JSON -> Javascript
// let a = '1';
// console.log(JSON.parse(a));

// Promise
// - Sync: đồng bộ // thèng nào viết trước chạy trước
// - Async: bất đồng bộ // khi nào gọi thì chạy, hoặc thời gian nào đó sẽ dc gọi (setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame)

// Nỗi đâu
// - Callback hell
// - Pyramid of doom

// Để tạo 1 promise
// 1. new Promise
// 2. excutor

// Đối tượng Promise hỗ trợ hai thuộc tính: trạng thái và kết quả.
// 1. pedding // Trong khi một đối tượng Promise đang "chờ xử lý" (đang hoạt động), kết quả là không xác định.
// 2. fulfilled // Khi một đối tượng Promise được "hoàn thành", kết quả là một giá trị.
// 3. rejected // Khi một đối tượng Promise bị "từ chối", kết quả là một đối tượng lỗi.
// let promise = new Promise(
// 	// excutor
// 	function(resolve, reject){
// 		// logic hiểu
// 		// Khi nào thành công gọi tới resolve()
// 		// Khi nào thất bại gọi tới reject()

// 		// Ex: Fake call API
// 		resolve([
// 			{
// 				id: 1,
// 				name: 'Javascript'
// 			}
// 		]);
// 		// reject('Có lỗi');
// 	}
// );

// promise trả về 3 phương thức
// promise.then(function(courses){
// 	// Thành công vào then.
// 	// console.log(courses);
// }).catch(function(error){
// 	// thất bại vào catch.
// 	// console.log(error);
// }).finally(function(){
// 	// Khi thực hiện xong, thành công hay thất bại cũng vào đây.
// 	// console.log('Done!');
// });

// FAQ: Bạn hiểu như thế nào Promise
	// -> Promise (ES6) sinh ra để xử lý bất đồng bộ trong js, trước khi có promise thì sử dụng callback và xảy ra vấn đề là callback hell -> khó nhìn khó hiểu.
	// để tạo ra promise xem ở trên...

// Promise chain
// let promise1 = new Promise(
// 	function(resolve, reject){
// 		resolve();
// 	}
// );
// promise1.then(function(){
// 	return 1;
// }).then(function(value){
// 	console.log(value);
// 	return 2;
// }).then(function(value){
// 	console.log(value);
// 	return 3;
// }).then(function(value){
// 	console.log(value);
// }).catch(function(error){
// 	console.log(error);
// })

// Ex: sau mỗi giây in ra 1, 2, 3
// function sleep(ms){
// 	return new Promise(function(resolve){
// 		setTimeout(resolve, ms);
// 	});
// }

// sleep(1000).then(function(){
// 	console.log(1);
// 	return sleep(1000);
// }).then(function(){
// 	console.log(2);
// 	return sleep(1000);
// }).then(function(){
// 	console.log(3);
// 	// return sleep(1000);
// 	return new Promise(function(resolve, reject){
// 		reject('Có lỗi');
// 	})
// }).then(function(){
// 	console.log(4);
// 	return sleep(1000);
// }).catch(function(error){
// 	console.log(error);
// });

// Promise methods (resolve, reject, all)
// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// let promise3 = Promise.resolve('Success!');
// let promise3 = Promise.reject('Error!');
// promise3.then(function(result){
// 	console.log('result: ', result);
// }).catch(function(err){
// 	console.log('error: ', err);
// });

// let promiseA = new Promise(function(resolve, reject){
// 	setTimeout(function(){
// 		resolve([1]);
// 	}, 2000);
// });
// let promiseB = new Promise(function(resolve, reject){
// 	setTimeout(function(){
// 		resolve([2, 3]);
// 	}, 5000);
// });

// Promise.all([promiseA, promiseB]).then(function(results){
// 	let result1 = results[0];
// 	let result2 = results[1];
// 	console.log(result1.concat(result2));
// });

// Arrow function trong Javascript ES6 
// const sum = (a, b) => ({a: a, b: a});
// console.log(sum(2, 5));

// Arrow function không thể tạo một `Contructor`
// const Course = (name, price) => {
// 	this.name = name;
// 	this.price = price;
// }
// const jsCourse = new Course('PHP', 1000);
// console.log(jsCourse); // error

// Enhanced object literals trong javascript ES6
// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 1. Định nghĩa key cho object dưới dạng biến
// let name = 'PHP';
// let price = 500;
// let course = {
// 	name,
// 	price,
// 	getName(){
// 		return name;
// 	}
// }
// console.log(course.getName());

// let fieldName = 'name';
// let fieldName = 'new-name';
// let fieldPrice = 'price';
// const course = {
// 	[fieldName]: 'Javascript',
// 	[fieldPrice]: 500
// }
// console.log(course);

//Default parameter values trong javascript ES6
// function myFunction(x, y = 10) {
// 	// y is 10 if not passed or undefined
// 	return x + y;
// }
// myFunction(5); // will return 15

// Destructuring trong javascript ES6
// let array = ['Javascript', 'PHP', 'Ruby'];
// // let [a, b, c] = array;
// // console.log(a, b, c);

// // Rest parameters // lấy ra các phần tử còn lại
// let [a, ...rest] = array;
// console.log(a);
// console.log(rest);
// Tương tự sử dụng cho object {}

// Spread trong javascript ES6
// in thứ tự array 2 trước array 1
// let array1 = ['Javascript', 'PHP', 'Ruby'];
// let array2 = ['React', 'Dart'];
// let array3 = [...array2, ...array1];
// console.log(array3);

// Tagged template literals trong ES6 (ít người biết)
// Ví dụ tạo mini thư viện giống React
// function highlight([first, ...strings], ...value){
// 	return value.reduce((acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()], [first]).join('');
// }
// let brand = 'F8';
// let course = 'Javascript';
// let html = highlight`Học lập trình ${course} tại ${brand}!`;
// console.log(html);

// Module: import/export
import logger from './logger.js';
logger('Test meassge...', 'warn');
