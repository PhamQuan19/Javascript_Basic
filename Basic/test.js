function User(firstName,lastName,avatar){
    this.firstName=firstName,
    this.lastName=lastName,
    this.avatar=avatar,
    this.getName= function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

User.prototype.className = 'F8';
User.prototype.getClassName = function(){
    return this.className;
}
var user =new User('Quan','Pham','Avatar');
var user2 =new User('Anh','Pham','Avatar');

console.log(user.className);
console.log(user2);
