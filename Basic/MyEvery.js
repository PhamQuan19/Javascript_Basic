Array.prototype.every2=function(callback){
    var output=true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result=callback(this[index],index,this);
            if(!result){
                output=false;
                break;
            }
        }
    }
    return output;
}

var courses=[
    {
        name: 'javascript',
        coin: 680,
        isFinite:true
    },
    {
        name:'PHP',
        coin:860,
        isFinite:true
    },

    {
        name:'Ruby',
        coin:890,
        isFinite:true
    }
];

var result=courses.every2(function(coure,index,array){
    return coure.isFinite;
});
// var result=courses.every(function(coure,index,array){
//     return coure.isFinite;
// });

console.log(result);

console.log('=====');
Array.prototype.myEvery = function(cb) {
    var Output=true;
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var result=cb(this[index],index,this);
            if(!result){
                Output=false;
                break;
            }
        }
    }
    return Output;
}


// Expected results

const numbers = [1, 3, 3, 5];

console.log(numbers.myEvery(function (number) {
    return number % 2 !== 0;
})); // Output: true

console.log(numbers.myEvery(function (number, index) {
    return index % 2 === 0;
})); // Output: false

console.log(numbers.myEvery(function (number, index, array) {
    return array.length % 2 === 0;
})); // Output: true


