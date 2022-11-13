var mouse={
    weight:0.2,
    getWeight: function(){
        return this.weight;
    }
};

function Mouse(color,weight){
    this.type='mouse';
    this.color=color;
    this.weight=weight;
}

console.log(Mouse.prototype.constructor);
console.log(Mouse.prototype===Mouse);

Mouse.prototype.sleep=function(){
    console.log('Sleeping...');
};

var jerry=new Mouse('Black',20);
console.log(jerry);
jerry.sleep();

var micKey=new Mouse('white',10);
console.log(micKey);
micKey.sleep();