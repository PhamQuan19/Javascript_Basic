var Mouse=require('./mouse');
var Cat=require('./cat');

var micKey=new Mouse('back');
var jerry=new Mouse('orange');

console.log(micKey);
console.log(jerry);

var tom=new Cat();
tom.eat(micKey);
console.log(tom);

