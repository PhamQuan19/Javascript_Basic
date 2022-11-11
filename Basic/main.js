// alert("Hello javascrip basic!")

// var fullName="Pham Van Quan";
// var age=20;
// alert(fullName);
// alert(age);

// giới thiệu 1 số hàm built-in

/*
    1 Alert
    2 Console
    3 Confirm
    4 Prompt
    5 set timeout
    6 set interval

*/

// var fullName="Pham Quan";

// console.log(fullName);
// console.warn(fullName);//in ra cảnh báo
// console.error(fullName);//in ra thong bao loi

// confirm("xac nhan ban du tuoi");
// prompt("Nhap tuoi");

// setTimeout(function() {
//     alert("Thong bao");
// },1000);

// chaỵ liên tục cách 1s chạy1 lần
// setInterval(function() {
//     console.log("day la log"+Math.random())
// }, 1000);

// Bai 15 toán tử

// var a=8;
// var b=2;

// var c=a%b;

// console.log(c);

//Bài 16 Toán tử gán

/*
    Toán tử         ví dụ               tương đương
    =               x=y                 x=y
    +=              x+=y                x=x+y
    -=              x-=y                x=x-y
    *=              x*=y                x=x*y
    /=              x/=y                x=x/y
    **=             x**=y               x=x**y   luỹ thừa           
 */

//Bài 17 tiền tố hậu tố

// console.log('--- Hậu tố ---');

// var number1 = 1;

// console.log(number1++); // 1
// console.log(number1); // 2

// console.log(number1++); // 2
// console.log(number1); // 3

// console.log('--- Tiền tố ---');

// var number2 = 1;

// console.log(++number2); // 2
// console.log(number2); // 2

// console.log(++number2); // 3
// console.log(number2); // 3

// Toán tử -- tương tự các bạn nhé, điểm khác
// là thay vì cộng 1 trừ toán tử -- sẽ trừ 1

/*
 Tăng tiền tố (tăng trước)	++	++x	Tăng x, sau đó trả về x
Giảm tiền tố (giảm trước)	––	––x	Giảm x, sau đó trả về x
Gia số hậu tố (tăng hậu tố)	++	x++	Sao chép x, sau đó tăng x, sau đó trả lại bản sao
Postfix giảm (sau giảm)	––	x––	Sao chép x, sau đó giảm x, sau đó trả lại bản sao

Tổng kết
x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
--x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm
 */

// 23 Toán tử chuỗi

// var firstName="Anh";
// var lastName="Quan";

// lastName+=" Anh"
// console.log(lastName);


// 26 toan tu so sanh

// var a=1,b=2;

// var s1="Quan",s2="Quan";
// if(a<b){
//     console.log("Dieu kien dung");
// }
// else{
//     console.log("Dieu kien sai");
// }

// Bai 34 Kieu du lieu
/**
 Kiểu dữ liệu nguyên thuỷ - Primitive data
    -Number
    -String
    -Bollean
    -Undeffined
    -Null
    -Symbol
 Kiểu dữ liệu phức tạp -Complex Data
    -Fucntion
    -Object
 */

//Number type
        // var a=1;
        // var b=2;
        // var c=1.5;
//Kiem tra kieu du lieu
//console.log(typeof a);
//String type
        // var s="Pham Quan";

// Bollean type
        //var isSuccess=true;

//Undeffined type
        //var age;

//null
        //var isNull=null;

//symbol
        // var id1=Symbol('id');
        // var id2=Symbol('id');

// Function
// var myFunction=function(){
//     alert('Hi.Xin chao Pham Quan');
// }

//myFunction();

// Object
/*var tenBien={
    Key: value;
}*/
        // var myObject= {
        // name: 'Anh Quan',
        // age: 18,
        // adress:'Ha Noi',
        // myFunction:function(){}
        // };

// console.log('myObject',myObject);

//Array
        // var myArray=[
        //     'javascript',
        //     'java',
        //     'python',
        // ];

//console.log(myArray);

// var dog1={
//     type: 'cho ta'
// };

// var dog2={
//     type: 'Cho Nhat'
// };

// var dog3={
//     name: 'Đần',
//     type:'Husky'
// };

// var arryDog=[
//     dog1,dog2,dog3
// ];

// console.log(arryDog);
// console.log(arryDog[2].name);

// var dog4={
//     type:'shiba'
// };

// arryDog[2]=dog4;
// console.log(arryDog);


/**
 typeof của 1 số sẽ trả về 'number'.

typeof của 1 chuỗi sẽ trả về 'string'.

Chú ý: Kết quả trả về của typeof sẽ luôn là 1 chuỗi, vậy nên typeof của d sẽ là 'string'.
 */

/**
 Truthy và Falsy là gì?
    -Truthy - to bool is true
        Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean
         mà có giá trị true thì ta gọi giá trị đó là Truthy.
        Các giá trị 1, ['BMW'], { name: 'Miu' } và 'hi' được đề cập trong ví dụ dưới đây
         là Truthy vì khi chuyển sang Boolean ta nhận được giá trị true.
 */
    // console.log(Boolean(1)) // true
    // console.log(Boolean(['BMW'])) // true
    // console.log(Boolean({ name: 'Miu' })) // true
    
    // console.log(!!'hi') // true

    /**
     !! là gì? Đơn giản thôi. Toán tử ! là toán tử not (phủ định) nên !! là 2 lần phủ định,
      mà 2 lần phủ định lại trở thành “khẳng định”.
      Trong Javascript thì đây là một “tip” để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean.
     */
    //   console.log(!!1) // true
    //   console.log(!!'f8') // true
    //   console.log(!!['Mercedes']) // true

    /**
     Falsy - to bool is false
    Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có 
    giá trị false thì ta gọi giá trị đó là Falsy.

    Trong Javascript có 6 giá trị sau được coi là Falsy:false
        0 (số không)
        '' or "" (chuỗi rỗng)
        null
        undefined
        NaN
     */

// console.log(!!false) // false
// console.log(!!0) // false
// console.log(!!'') // false
// console.log(!!null) // false
// console.log(!!undefined) // false
// console.log(!!NaN) // false

/**
 * Chú ý!
Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:
  '0' (một chuỗi chứa số không)
    ' ' (một chuỗi chứa dấu cách)
    'false' (một chuỗi chứa từ khóa false)
    [] (một array trống)
    {} (một object trống)
    function(){} (một hàm “trống”)
 */


/**
    0
    null
    ''
    undefined
    NaN
    false
*/

// var result= 'A' && 'B' && 'C';

// console.log(result);

// if(result){
//     console.log('Dieu kien dung')
// }
// else{
//     console.log('Dieu kien sai');
// }

// var result1= 'A' || 'B' || 'C';

// console.log(result1);

// if(result1){
//     console.log('Dieu kien dung')
// }
// else{
//     console.log('Dieu kien sai');
// }