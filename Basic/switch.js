function run(fruits) {
    var result;

    switch(fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
        default: result = "No fruits";
    }

    return result;
}
console.log(run("Apple"));

//Toán tử 3 ngôi
var course={
    name: 'Javascrip',
    coin: 250
}

var result =course.coin>0 ? `${course.coin} Coins` : 'Mien phi';
console.log(result);

var a=1,b=2;
var c=a > 0 ? a:b; 