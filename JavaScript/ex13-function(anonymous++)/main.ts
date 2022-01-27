// 익명함수
// var count = 0;
// var container = null;
// document.addEventListener('DOMContentLoaded', function () {
//   container = document.querySelector('#container');
//   // append()문자열을 붙여서 출력하는 함수(매서드)
//   container.append(count + ' hi, hello ');
//   count++;
//   // 버튼 클릭이 되면 익명함수를 실행하여 지속적으로 글자를 붙여서 출력하게 된다.
//   var btnStart = document.querySelector('#btnPrintf');
//   btnStart.addEventListener('click', function () {
//     container.append(count + ' hi, hello ');
//     count++;
//   });
// });

// 일반함수
// var count = 0;
// var container = null;
// document.addEventListener('DOMContentLoaded', function () {
//   container = document.querySelector('#container');
//   h2(); // 일반 함수 호출
//   var btnStart = document.querySelector('#btnPrintf');
//   btnStart.addEventListener('click', function () {
//     h2();
//   });
// });
// // 이름이 있는 일반함수
// function h2() {
//   container.append(count + ' hi salut ');
//   count++;
// }

// 객체방식으로 함수정의
// var hi = new Function('name', "document.write(name + ' hi hello')");
// hi('kim');

// 익명함수의 확장으로 함수정의
// 재사용하는 것을 목적이 아닌 다른 함수들과의 충돌을 막기 위해서 사용하는 것이다.
(function (name: string) {
  document.write(name + ' hi hello');
})('kim');
