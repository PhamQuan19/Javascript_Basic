

// function wirteLog(message,message2){
//     console.log(message);
//     console.log(message2);
// }

// wirteLog('Pham Quan','Đức Anh');

// Doi tuong arguments
function wiriteLog(){
    console.log(arguments);
}

wiriteLog('Pham Quan','Duc Anh','Minh Duc');

// giới thiệu vòng for of
function wiriteLog1(){
    for(var param of arguments){
        console.log(param);
    }
}
wiriteLog1('Pham Quan','Duc Anh','Minh Duc');

function wiriteLog2(){
    var myString='';
    for(var param of arguments){
        myString +=`${param} - `;
    }
    console.log(myString);
}
wiriteLog2('Quan1','Quan2','Quan3');

/**
 Các loại function
    1.Declaration function
    2.Expression function
    3.Arrow function
 */

// Declaration function
function showMessage(){
    console.log('Declaration function');

}

//Expression function
var showMessage2= function(){
    console.log('Expression function');
}

showMessage();