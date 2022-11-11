//array.map
var numbers =[1,2,3,4];
var squareNumbers=numbers.map(function(x){
    return x*x;
});
 console.log(squareNumbers);

 var rectangles=[
   { width: 10, height:5},
   { width: 10, height:20},
   { width: 4, height:16},
 ];

 var res=rectangles.map(function(x){
    return x.width*x.height;
 });
 console.log(res);

// array.filter
var numbers=[1, 2, 3, 4];
var evenNumber = numbers.filter(function(item){
    return item % 2===0;
});

console.log(evenNumber);

//array.fine

var numbers1=[1, 2, 3, 4];
var res=numbers1.find(function(item){
    // console.log(item);
    return item % 2===0;
});

console.log(res);

// array.reduce

var numbers2=[1, 2, 3, 4];
var sum =numbers2.reduce(function(x,y){
    console.log(x,y);
    return x+y;
});
console.log(sum);

//BTVN
var orders=[
    {name: 'A',quantity: 2, unitPrice: 100},
    {name: 'B',quantity: 1, unitPrice: 400},
    {name: 'C',quantity: 5, unitPrice: 15}
];

var price=orders.map(function(x){
    return x.quantity * x.unitPrice;
});

console.log(price);
var sumOrder=price.reduce(function(x,y){
    return x+y;
});
console.log(sumOrder);
//cach 2
var sumOder2 = orders.map(function(x){
    return x.quantity *x.unitPrice;
}).reduce(function(x,y){
    return x +y;
});
console.log(sumOder2);

//Phan 2
console.log("=============Phan 2===================");
var numbers3=[1, 2, 3, 4];
var sum1 =numbers3.reduce(function(x,y){
    console.log(x,y);
    return x+y;
},0);
console.log(sum1);

var products=[
    {name: 'A',quantity: 2, unitPrice: 10},
    {name: 'B',quantity: 3, unitPrice: 20},
    {name: 'C',quantity: 4, unitPrice: 30}
];

console.log("=======");
var total=products.reduce(function(currentTotal, product){
    console.log(currentTotal,product);
    return currentTotal + product.quantity * product.unitPrice;
},0);
console.log(total);
/**
 loop 1: currentTotal =0 ,product=product[0] => 0+2*10=20
 loop 2: currentTotal =20 ,product=product[1] => 20+3*20=80
 loop 3: currentTotal =80 ,product=product[2] => 80+4*30=200
 */

 //BTVN
 var item=['Tom','Bill','Kim'];
 var str=item.reduce(function(itemCurrent ,item){
        item = "<"+ item +">";
    return  itemCurrent  + item;
 },"");

 console.log(str);