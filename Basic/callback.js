//la hàm function được truyền qua đối số khi gọi hàm khác

//1 là hàm
//2 đc truyền qua đối số

function myFunction(param){
    param('Hoc lap trinh');
    //myCallBack('Hoc lap trinh');
}
function myCallBack(value){
    console.log('value: ',value)
}
myFunction(myCallBack);



function sumCb(a, b) {
    return a+b;
}
function subCb(a, b) {
    return a-b;
}
function multiCb(a, b) {
    return a*b;
}
function divCb(a, b) {
    return a/b;
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
//caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3
console.log(caculate(1, 2, sumCb));
console.log(caculate(1, 2, subCb));
console.log(caculate(1, 2, multiCb));
console.log(caculate(3, 1, divCb));



