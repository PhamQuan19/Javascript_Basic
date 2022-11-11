/**
 Các method của 1 array
    -a.concat(b); nối mảng
    -a.push(b);
    -a.pop();
    -a.shift();
    -a.unshift();
 */

var a=[1,3,2];
var b=[10,20];

//Noi mang b sau mang a
// var res=a.concat(b);
// console.log(res);

// var c=6;
// var pus=a.push(c);
// console.log(pus); //tra ve do dai mang moi

//tra ve gia tri cua ptu cuoi mang
// var res =a.pop();
// console.log(res);

//xoa/lay ra phan tu dau cua mang
// var x=a.shift();
// console.log(x);
// console.log(a);


var y =a.unshift(5);
console.log(y);
console.log(a);

