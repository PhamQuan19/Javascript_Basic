Array.prototype.forEach2=function(callback){
    for(var index in this){
        // this.hasOwnProperty(index);
        if( this.hasOwnProperty(index)){
            callback(this[index],index,this);
        }
        // console.log('index',index, this.hasOwnProperty(index));
    }
}

var courses=[
    'javascript',
    'PHP',
    'Java'
];
// console.log(courses);
courses.forEach2(function(coure,index,array){
    console.log(coure,index,array);
})

// courses.forEach(function(coure,index,array){
//     console.log(coure,index,array);
// })


