'use strict'

function User(first, last) {
  this.firstName = first;
  this.lastNmae = last;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastNmae}`
}

// new라는 키워드로 User 생성자 함수 실행 
const soowan = new User('Soowan', 'Lee');
const amy = new User('Amy', 'Clarke');
const neo = new User('Neo', 'Smith');

console.log(soowan.getFullName());
console.log(amy.getFullName());
console.log(neo.getFullName());
