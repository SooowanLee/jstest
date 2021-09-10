'use strict'

// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료


// 3초 후 Soowan! 출력
const timer = setTimeout(() => {
  console.log('Soowan!');
}, 3000);

// setTimer() 정지
const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
  clearTimeout(timer);
});

// 3초마다 Hyebin 출력
const interval = setInterval(() => {
  console.log('Hyebin');
}, 500);
// Interval 정지
const h2El = document.querySelector('h2');
h2El.addEventListener('click', () => {
clearInterval(interval);
})