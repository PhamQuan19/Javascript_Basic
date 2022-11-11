var date =new  Date();
console.log( date);
console.log(date.getFullYear());

var year=date.getFullYear();
var month=date.getMonth()+1;
var day=date.getDate();

console.log(day);

console.log(`${day}/${month}/${year}`);