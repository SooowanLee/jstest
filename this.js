'use strict'

// this
// 일반(Nomal) 함수는 호출 위치에서 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

// const soowan = {
//   name: "Soowan",
//   normal: function () {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   }
// };
// soowan.normal();
// soowan.arrow();

// const amy = {
//   name: 'Amy',
//   normal: soowan.normal,
//   arrow: soowan.arrow
// }

// amy.normal();
// amy.arrow();


function User(name) {
  this.name = name;
}
User.prototype.normal = function () {
  console.log(this.name);
}
User.prototype.arrow = () => {
  console.log(this.name);
}

const soowan = new User('Soowan');

soowan.normal();
soowan.arrow();

console.clear();
const timer = {
  name: 'Soowan!!',
  timeout: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 2000)
  }
}
timer.timeout();