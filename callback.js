'use strict'

// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeeout(함수, 시간)

function timeout(cb) {
  setTimeout(() => {
    console.log('Soowan!');
    cb();
  }, 3000);
}
timeout(() => { // callback함수
  console.log('Done!');
});
