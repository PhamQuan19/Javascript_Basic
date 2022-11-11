var numbers=[2,9,3,4,1];

var ascendingNumber= numbers.sort(function(a,b){
    return a-b; //tăng dần
});

console.log(ascendingNumber);

var descendingNumber=numbers.sort(function(a,b){
    return b-a; //giảm dần
});

console.log(descendingNumber);

var employees=[
    {name: 'Tí',age:18},
    {name: 'Tèo',age:20},
    {name: 'Tẹo',age:19}
];

console.log(employees);

var sortedEmployees=employees.sort(function(a,b){
    return a.age-b.age; //>0
});


console.log(sortedEmployees);


/**
 * a và b
 Nếu trả về giá trị < 0 => a > b  tăng dần
 Nếu trả về giá trị > 0 => a < b giảm dần
 Nếu trả về giá trị > 0 => a = b giữa nguyên 


 */

 //BTVN

 var products=[
    {name:'LapTop',price:2000,stock:4},
    {name:'Điện thoại',price:1000,stock:2},
    {name:'Ti vi',price:3000,stock:1},
    {name:'Tủ lạnh',price:2000,stock:3}
 ];

 var sortPrice=products.sort(function(a,b){
    return b.price-a.price;
 });

 console.log(sortPrice);

//  var priceStock=products.map(function(x){
//     return x.price * x.stock;
//  })

//  console.log(priceStock);

 var resort=products.sort(function(a,b){
    return b.price*b.stock - a.price*a.stock;
 });

 console.log(resort);


//  var products = [
//     {name:'bim bim', price: 5000, stock:20},
//     {name: 'sting', price:10000, stock:15},
//     {name:'nutri',price:12000, stock:20},
//     {name:'tra sua' , price:25000,stock:5}
//     ];
    
//     var priceStock = products.map(function (x) {
//         return x.price*x.stock;
//     });
    
//     console.log(priceStock);
    
//     var orders = priceStock.sort(function (a, b) {
//         return a-b;
//     });
//     console.log(orders);