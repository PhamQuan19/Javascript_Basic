var str='Pham Anh Quan \'lap trinh vien\'';
console.log(str.length);

var name1="Anh Quan";
console.log('Toi la : '+name1);
console.log(`Toi la: ${name1}`);

/**
 1 Length
 2 Find index
 3 Cut string
 4 Replace
 5 Convert to upper case - viet hoa
 6 Convert to lower case - viet thuong
 7 Trim
 8 Split
 9 get a character by index
 */

 var myString ='Hoc JS tai F8!';

 //1 Length
//  console.log(myString.length);

//2 Find index - Tim kiem vi tri trong chuoi
//var myString ='Hoc JS tai JS JS F8';
//console.log(myString.indexOf('JS'));
//Tim ki tu JS tu vi tri so 6
//console.log(myString.indexOf('JS',6));
//Tim tu cuoi chuoi
//console.log(myString.lastIndexOf('JS'));
//
//console.log(myString.search('JS'));

// 3 Cut string -cat chuoi

//cat chuoi tu vi tri x->y
// console.log(myString.slice(4,6));
//cat chuoi tu vi tri x
// console.log(myString.slice(4));
//cat tu phai sang trai
// console.log(myString.slice(-3,-1));

//4 Replace thay the chuoi
var myString1 ='Hoc JS tai JS F8!';
//thay the chuoi dau tien
// console.log(myString1.replace('JS','Javascript'));
//thay the tat ca cac ki tu JS
// console.log(myString1.replace(/JS/g,'Javascript'));


//5 Convert to upper case - viet hoa
var myString2 ='Hoc JS tai JS F8!';
// console.log(myString2.toUpperCase());

//6 Convert to lower case - viet thuong
var myString3 ='Hoc JS tai JS F8!';
// console.log(myString3.toLowerCase());

//7 Trim - xoa khoang trang 2 dau
var myString7 ='  Hoc JS tai F8!  ';
// console.log(myString7.trim());

//8 Split - cat chuoi tao thanh array
 var language ='Javascript , Java, PHP, C';
//  console.log(language.split(', '));

//9 get a character by index - lay ra ki tu tai vi tri x
var myString9 ='Hoc JS tai F8!';
console.log(myString9.charAt(4));


//Lam việc với số
/*
Trong Javascript có 2 loại số:
    +Các số thông thường trong Javascript được lưu trữ dưới dạng 64 bit IEEE-754 
    (còn được gọi là các số phẩy động).
     Trong hầu hết các trường hợp khi làm việc với Javascript là chúng ta sử dụng loại số này.
    +Số BigInt là loại số sử dụng để biểu thị số nguyên có độ dài tùy ý.


    Đối tượng Number
Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. 
Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript:

Phương thức	Vai trò
    Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
    Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
    Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
    Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
    Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
    Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi
*/
console.log(Number.isFinite(2 / 0)); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'
