var courses=[
    'javascript',
    'PHP',
    'C++',
    'Java'
];

// courses.map(function(courses){
//     console.log(courses);
// });

// var htmls =courses.map(function(courses){
//     return `<h2>${courses}<h2>`;
// });

// console.log(htmls.join(''));

Array.prototype.map2=function(callback){
    var arrayLength=this.length;
    var output=[];
    for(var i=0;i<arrayLength;i++){
       var result= callback(this[i],i);
       output.push(result);
    }
    return output;
}

var htmls=courses.map2(function(courses){
    return `<h2>${courses}<h2>`;
});
console.log(htmls.join(''));

// courses.map2(function(courses,index){
//     console.log(index,courses);
// });

console.log('============')
Array.prototype.myMap = function(cb) {
    var arrayLength=this.length;
    var output=[];
    for(var i=0;i<arrayLength;i++){
       var result= cb(this[i],i);
       output.push(result);
    }
    return output;
}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) ;// Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})); // Output: [0, 2, 6]

var language = [
    {
        id: 1,
        name:'linh',
        coin: 200
    },

    {
        id: 1,
        name:'linh',
        coin: 0
    },

    {
        id: 1,
        name:'linh',
        coin: 200
    },

    {
        id: 1,
        name:'linh',
        coin: 333
    },

    {
        id: 1,
        name:'linh',
        coin: 111
    },

    {
        id: 1,
        name:'linh',
        coin: 555
    },
];
Array.prototype.reduce2 = function(callback,result) {
    for( var i = 0; i < this.length; i++) {
        var result = callback(result, this[i]);
    }
    return result;
}

var htmls = language.reduce2(function(total ,coure) {
   return total + coure.coin;
}, 0);

console.log(htmls);


var courses = [
    {
        id: 1,
        name: 'javascript',
        coin:2214 
    },
    {
        id: 2,
        name: 'javascript',
        coin:221435
    },
    {
        id: 3,
        name: 'HTML, CSS',
        coin: 2
    },
    {
        id: 4,
        name: 'ruby',
        coin: 2
    },
    {
        id: 5,
        name: 'php',
        coin: 2
    },
    {
        id: 6,
        name: 'ReactJS',
        coin: 0
    }
]


// forEach()
// courses.forEach(function(course, index) {// bên trong được truyền vào 1 tham số đc gọi là call back có nghĩa là nó đc gọi lại
//     console.log(index, course)
// }) 

Array.prototype.forEach2 = function(callback) {
    var arguments = this.length
    for(var i = 0; i < arguments; ++i) {
        callback(this[i], i)
    }
}

courses.forEach2 (function(course) {
console.log(course)
})


