var languages=[
    'Javascript',
    'HTML-CSS',
    'PHP',
    'Java'
];

// console.log(languages);
// //kiem tra xem co phai la 1 array hay ko
// console.log(Array.isArray(languages));
// console.log(languages.length);
// console.log(languages[2]);

//Lam viec voi mang


//1 To String - Chuyen mang thanh chuoi
var languages1=[
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(languages1.toString());

//2 Join - Bien array thanh 1 chuoi
console.log(languages1.join('-'));

//Pop - Xoa di phan tu cuoi mang,tra lai phan tu da xoa
var languages2=[
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(languages2.pop());//xoa element cuoi mang va tra ve phan tu da xoa
console.log(languages2);

//Push - them phan tu vao cuoi mang
var languages3=[
    'Javascript',
    'PHP',
    'Ruby'
];

console.log(languages3.push('Python'));//in ra do dai moi cua mang
console.log(languages3);

//Shift - Xoa di phan tu dau mang va tra ve phan tu da xoa
var languages4=[
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(languages4.shift());
console.log(languages4);

//Unshift - them 1 hoac nhieu phan tu vao dau mang va tra ve do dai moi cua mang
var languages5=[
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(languages5.unshift('C'));
console.log(languages5);

//Splicing - Xoa Cat Chen phan tu vao mang
var languages6=[
    'Javascript',
    'PHP',
    'Ruby'
];
//Xoa
languages6.splice(1, 1); //vi tri bat dau xoa va xoa bnhieu phan tu
console.log(languages6);

// chen
var languages7=[
    'Javascript',
    'PHP',
    'Ruby'
];
languages7.splice(1, 0, 'C#'); //vi tri bat dau chen va khong xoa phan tu nao va them 1 phan tu vao
console.log(languages7);

// concat - noi 2 mang
var array1=[
    'Javascript',
    'PHP',
    'Ruby'
];
var array2=[
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(array1.concat(array2));

//slicing - cat lay element cua array
var array3=[
    'Javascript',
    'PHP',
    'Ruby',
    'C++'
];

// console.log(array3.slice(1)); // cat het mang
console.log(array3.slice(1,3));//cat tu vi tri so 1 den vi tri so 2
console.log(array3);
console.log(array3.slice(-1));

