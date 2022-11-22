//some:->true or false;
Array.prototype.some2=function(callback){
    var output=false;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)){
                output= true;
                break;
            };
        }
    }
    return output;
}
var courses=[
    {
        name: 'javascript',
        coin: 680,
        isFinite:false
    },
    {
        name:'PHP',
        coin:860,
        isFinite:false
    },

    {
        name:'Ruby',
        coin:890,
        isFinite:false
    }
];

var result=courses.some2(function(course,index,array){
    return course.isFinite;
});

console.log(result);
console.log('=====');
//BT

Array.prototype.mySome = function(callback) {
    for(var index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)){
               return true;
                break;
            };
        }
    }
    return false;
}


/**
Expected results:
 */
const numbers = [1, 3, 3, 5];

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
})); //Output: false

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
})); //Output: true

console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); //: true



