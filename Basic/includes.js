//includes method
var title='Responsive web design';
console.log(title.includes('Responsive'));

var courses=['javscript','php','Java'];
console.log(courses.includes('Java'));


var cars = ['Rolls-Royce', 'Mercedes', 'Lexus', 'BMW', 'Audi'];

function checkCar(cars) {
   return cars.includes('Mercedes', 2);
}

console.log(checkCar(cars)); // Output: ?
