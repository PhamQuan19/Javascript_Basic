function calculateTriangleSquare(a, h){
    return a*h/2;
}
// calculateTriangleSquare(5,10);

console.log(calculateTriangleSquare(5,10));

function calculateCricleSquare(r){
    return r*r*3.14;
}

console.log(calculateCricleSquare(5));

// object method
var myDog={
    weight:5,
    name: 'Đần',
    age: 1,
    // anonymous function - ham khong co ten
    bark: function(){
        console.log('Gau gau');
    },

    eat: function(bone){
        this.weight=this.weight + bone.weight;
        return this;
    }
};

// console.log(myDog.age);

// function bark(){
//     console.log('ụt ịt');
// }

// bark();

var bone={weigth:1};
console.log('Befor eating' ,myDog.weight);

// var res=myDog.eat(bone);
// console.log('After eating',res.weight);

console.log(4<7);


// Dung function nhu tham so (callback);
var coffeMachine ={
    makeCoffe: function(onFinish){
        console.log('making coffe...');
        onFinish();
    }
};

var beep = function(){
    console.log('tít tít ');
};

beep();
coffeMachine.makeCoffe(beep);// naming convention;

coffeMachine.makeCoffe(function(){
    console.log('Bíp Bíp');
});

