/**
 Math.PI
 Math.round() lam tron so
 Math.abs() gia tri tuyet doi
 Math.ceil()
 Math.floor() lam tron tren
 Math.random() lam tron duoi
 Math.min()
 Math.max()
 */

 var pi =Math.PI;
 console.log(pi);

 //lam tron so
 var number1=Math.round(1.4);
 var number2=Math.round(1.8);
 console.log(number1);
 console.log(number2);

//gia tri tuyet doi
console.log(Math.abs(-4));

//random tu 0 -> 10
console.log(Math.floor(Math.random()*10));
var random=Math.floor(Math.random()*5);
var bonus=[
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];

console.log(bonus[random]);