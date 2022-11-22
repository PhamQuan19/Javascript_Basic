Array.prototype.filter2=function(callback){
    var output=[];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index],index,this);
            if(result){
                output.push(this[index]);
            }
        }
        
    }
    return output;
}

var courses=[
    {
        name: 'javascript',
        coin: 680
    },
    {
        name:'PHP',
        coin:860
    },

    {
        name:'Ruby',
        coin:890
    }
];

// var filterCourses=courses.filter(function(course,index,array){
//     return course.coin>700;
// });

var filterCourses=courses.filter2(function(course,index,array){
    // console.log(course,index,array);
    return course.coin>700;
});

console.log(filterCourses);



Array.prototype.myFilter = function(callback) {
    var output=[];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result = callback(this[index],index,this);
            if(result){
                output.push(this[index]);
            }
        }
        
    }
    return output;
}



//Expected results:

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
}));// Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); //Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); //Output: [1, 2, 3, 4]



