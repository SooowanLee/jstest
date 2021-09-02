import random from './getRandom';

// 산술 연산자(arithmetic operator)

console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

// 할당 연산자(assignment operator)

const a = 2;
let b = 2;
b += 1;

console.log(a);
console.log(b);

console.clear();
// 비교 연산자(comparison operator)

const c = 1;
const d = 1;

console.log(c === d); // 일치 연산자

function isEual(x, y) {
  return x === y;
}

console.log(isEual(1, 1));
console.log(isEual(2, '2'));
console.log(c !== d); // 불일치 연산자


console.log(c >= d);

// 논리 연산자(logical operator)

const e = 1 === 1;
const f = 'AB' === 'AB';
const g = false;

console.log(e);
console.log(f);
console.log(g);

console.log('&&:', e && f && g);
console.log('||:', e || f || g);
console.log('!:', !e);

// 삼항 연산자(ternary operator)
  const h = 1 < 2;

  if(h) {
    console.log('참');
  } else {
    console.log('거짓');
  }

  console.log(h ? '참' : '거짓');

// 조건문 (If statement)

const i = random();

switch (i) {
  case 0: 
    console.log('i is 0');
    break;
  case 2:
    console.log('i is 2');
    break;
  case 4:
    console.log('i is 4');
    break;
  default: 
    console.log('rest...');
}

if(i === 0) {
  console.log('i is 0');
} else if(i === 2) {
  console.log('i is 2');
} else if(i === 4) {
  console.log('i is 4');
} else {
  console.log('rest....');
}

// 반복문 (For statement)
// for (시작조건; 종료조건; 변화조건){}

const ulEl = document.querySelector('ul');

for (let j = 0; j < 10; j++) {
  const li = document.createElement('li');
  li.textContent = `list-${j + 1}`;
  if((j + 1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent);
    });
  }
  ulEl.appendChild(li);
};

// 변수 유효범위(Variable Scope)
// var(함수레벨), let, const(블록레벨)

function scope() {
  if(true) {
    const k = 123;
    console.log(k);
  }
}

scope();