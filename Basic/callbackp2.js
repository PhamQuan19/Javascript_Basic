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