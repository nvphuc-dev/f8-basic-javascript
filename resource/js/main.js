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
 Toán tử trong JS
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

