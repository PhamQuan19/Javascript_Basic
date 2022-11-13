var today=new Date();

var mouse={
    weight:0.2,
    getWeight: function(){
        return this.weight;
    }
};

// console.log(mouse.getWeight());

//constructor function
function Mouse(color,weight){
    this.type='mouse';
    this.color=color;
    this.weight=weight;
}

var mouse1=new Mouse('white',0.3);
var mouse2=new Mouse('black',0.2);

console.log(mouse1);
console.log(mouse2);
//==================BT=======================
var tom={
    name:'Tom',
    stomach:[],
    eat: function(mouse){
        this.stomach.push(mouse);
        return this;
    }
};

function Mouse1(name){
    this.name=name;
}

var m1=new Mouse1('m1');
var m2=new Mouse1('m2');
var m3=new Mouse1('m3');

tom.eat(m1).eat(m2).eat(m3);
console.log(tom);

console.log('===============');

var m1={name:'m1'};
var m2={name:'m2'};
var m3={name:'m3'};

tom.eat(m1).eat(m2).eat(m3); //method chaining
console.log('Tom:');
console.log(tom);

