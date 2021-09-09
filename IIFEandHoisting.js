'use strict'

// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

const a = 7;
function  double() {
  console.log(a * 2);
}
double();

// (function () {}()); 소괄호 안에 소괄호 권장 X 
(function () {
  console.log(a * 2);
}());

// (function () {})(); 소괄호 밖에 소괄호 권장
(function () {
  console.log(a * 2);
})();

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어 올려지는 현상

console.clear();

const b = 7;
1
double1();

function double1() {
  console.log(b * 2);
}

