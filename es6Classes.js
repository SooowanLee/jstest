// ES6 Classes

// const soowan = {
//   name: 'Soowan',
//   normal() {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   }
// }

// soowan.normal();
// soowan.arrow();

// function User(first, last) {
//   this.first = first;
//   this.last = last;
// }
// User.prototype.getFullName = function () {
//   return `${this.first} ${this.last}`;
// }


class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  getFullName() {
    return `${this.first} ${this.last}`
  }
}

const soowan = new User('Soowan', 'Lee');
const hyebin = new User('Hyebin', 'Jeong');
const dohyun = new User('Dohyun', 'Kim');

console.log(soowan);
console.log(hyebin.getFullName());
console.log(dohyun.getFullName());