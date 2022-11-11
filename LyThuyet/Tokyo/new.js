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

