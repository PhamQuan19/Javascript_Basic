/*
Arithmetic operator
    1: ++ -- (increment decrement)
    2: * / %
    3: + -

*/

var a=5;
// var c=a++ + ++a;
// console.log(c);

/**
    5 + ++a  //a=(6)
    5 + 7=12 
 */

// var res=a++ + ++a - --a + a--;
// console.log(res);
/**
    5+ ++a - --a + a--   (a=6)
    5+ 7 - --a + a--     (a=7)
    5+ 7 - 6 + a--       (a=6)
    5+ 7 -6 + 6          (a=5)
 */

var x=5,y=10;
var res1= x++ * y-- + --x * ++y;
console.log(res1);
/**
    5 * y-- + --x * ++y     (x=6 , y=10)
    5 * 10 + -- x * ++y     (x=6 ,y=9)
    5 * 10 + 5 * 10         (x=5, y=10)
 */