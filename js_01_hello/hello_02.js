let num1 = 100;
let num2 = 200;

// js 의 interpolation 에서는 변수 뿐만 아니라
// 직접 연산식을 사용할수 있다.
console.log(`${num1} + ${num2} = ${num1 + num2}`);

num1 = "우리나라";
num2 = "대한민국";
console.log(`${num1} + ${num2} = ${num1 + num2}`);

// 함수 선언
function func1() {
  let num3 = 100;
  let num4 = 200;
  console.log(num3 + num4);
}

// 함수 호출
func1();

let num5 = 100;
let num6 = 200;
function func2() {
  console.log(num5 + num6);
}

func2();

/*
    js 에서 변수를 선언하는 또다른 키워드
    var : 초기 JS 탄생시점에서 만들어진 키워드
    var 를 사용하여 선언된 변수는 또다시 선언될수 있다
*/

var num7 = 100;
var num8 = 200;

let num6 = "대한민국";
let num5 = "우리나라";

var num7 = "대한민국";
var num8 = "우리나라";

console.log(num7, num8);
