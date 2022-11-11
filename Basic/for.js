/*
Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length.
 Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, 
 giá trị trong khoảng từ min tới max.

Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.

*/

function getRandNumbers (min, max, length){
    var arr=[];
    for(var i=0;i<length;i++){
        arr[i]=(Math.random()*(max-min)+min);
    }

    return arr;
}

var res=getRandNumbers(1,10,4);
console.log(res);


/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 */


//Tính tổng các phần tử là số của mảng
 function getTotal(arr) {
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }

    return sum;
}

// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17
console.log("=============================");

var myArray=[
    'javascript',
    'java',
    'C++',
    'Python',
    'HTML',
    'Golang'

];

var arrLength=myArray.length;
for(var i=0;i<arrLength;i++){
    console.log(myArray[i]);
}

console.log("=============================");
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]


function getTotal(arr) {
    var sum = 0;
    var arrLength = arr.length;
    for(var i=0;i<arrLength;i++) {
        sum += arr[i].price;
    }
    return sum;
}

// Expected results:
// getTotal(orders) // Output: 8700000
console.log(getTotal(orders) );

console.log('====================');
//For-in

var myInfo={
    name:'Phạm Quân',
    age: 20,
    addrees: 'Hà Nội'
}

for(var key in myInfo){
    console.log(myInfo[key]);
}

var languages=[
    'javascript',
    'java',
    'C++',
    'Python',
    'HTML',
    'Golang'

];

for(var key in languages){
    console.log(languages[key]);
}

//BT

function run(object) {
    var array=[];
    for(var key in object){
        array.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }

    return array;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"

// ]

