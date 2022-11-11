var myInfo={
    name :'Pham Quan',
    age: 20,
    address: 'Hung Yen'
};

//them thong tin vao object
myInfo.email='phamquan@gmail.com';
console.log(myInfo);

//lay thong tin trong object
console.log(myInfo.name);

//xoa key
delete myInfo.age;
console.log(myInfo);

var myInfo2={
    name :'Pham Quan',
    age: 20,
    address: 'Hung Yen',
    getName: function(){
        return this.name;
    }
};

console.log(myInfo2.getName());

// function -->phương thức/method
//Others --> thuộc tính/property


//===========================================
// Object Contructor
console.log('=======================Object Contructor===========================');
function User(firstName,lastName,avatar){
    this.firstName=firstName,
    this.lastName=lastName,
    this.avatar=avatar
};

var author =new User('Quan','Pham','Avatar');
var user =new User('Anh','Pham','Avatar');

author.tile='hế lô sờ li li';
user.comment='Hoc lap trinh that la thu vi';


console.log(author);
console.log(user);

//=============Object prototype=================
console.log('=====================Object prototype=============================');
function User1(firstName,lastName,avatar){
    this.firstName=firstName,
    this.lastName=lastName,
    this.avatar=avatar,
    this.getName= function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

User1.prototype.className = 'F8';
User1.prototype.getClassName = function(){
    return this.className;
}
var user1 =new User('Quan','Pham','Avatar');
var user2 =new User('Anh','Pham','Avatar');

console.log(user1.className);
console.log(user2);

