// Bài toán:Hiển thị ra màn hình từ 0-9
// for(var i=0;i<10;i++){
//     console.log(i);
// }
// console.log('===================');
// for(var i=9;i>=0;i--){
//     console.log(i);
// }

// var employess=[
//     {nam: 'Thịnh',age:28},
//     {nam: 'Quân',age:20},
//     {nam: 'Trang',age:19},
// ];

// for(var i=0; i<=2;i++){
//     console.log(employess[i]);
// }

// for of .. for in

var employees1=[
    {name: 'Thịnh',age:28},
    {name: 'Quân',age:20},
    {name: 'Trang',age:19},
];

for(var employee of employees1){
    console.log(employee.name, employee.age);
}

console.log('==============');

var myDog={
    name: 'Đần',
    age: 1,
    weight: 5
};

for(var key in myDog){
    console.log(key, myDog[key]);
}
