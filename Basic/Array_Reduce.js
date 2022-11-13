var courses=[
    {
        id:1,
        name: 'Javascript',
        coin:10
    },
    {
        id:2,
        name: 'HTML,CSS',
        coin:0
    },
    {
        id:3,
        name: 'Ruby',
        coin:0
    },
    {
        id:4,
        name: 'PHP',
        coin:400
    },
    {
        id:5,
        name: 'ReactJS',
        coin:500
    },
    {
        id:6,
        name: 'Ruby',
        coin:600
    },

];

//cach dung vong lap
// var toalCoin=0;
// for(var item of courses){
//     toalCoin+=item.coin;
// }

// console.log(toalCoin);

//var i=0;

// function coinHandler(accumulator,currentValue,currentIndex,originArray){
//     i++;
//     var res=accumulator+currentValue.coin;
//     console.table({
//         'Lượt chạy: ':i,
//         'Biến tích trữ: ': accumulator,
//         'Giá biến đổi: ': currentValue.coin,
//         'Tổng các khoá học ':res
//     });
//     return res;
// }

// var toalCoin=courses.reduce(coinHandler,0);

//cach1
// function coinHandler(accumulator,currentValue){
//     var res=accumulator+currentValue.coin;
//     return res;
// }

// var toalCoin=courses.reduce(coinHandler,0);
// console.log(toalCoin);

//cach2
var toalCoin=courses.reduce(function coinHandler(accumulator,currentValue){
    var res=accumulator+currentValue.coin;
    return res;
},0);
console.log(toalCoin);


var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]

function getTotalGold(sports){
    var tong=sports.reduce(function (accumulator,currentValue){
        var res=accumulator+currentValue.gold;
         return res;
    },0);
    return tong;
}


// Expected results:
console.log(getTotalGold(sports)) // Output: 23






