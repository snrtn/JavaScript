// var str: string = window.prompt('string');
// alert('length string : ' + str.length);

// document.addEventListener('DOMContentLoaded', function () {
//   var str: string = window.prompt('string');

//   var print: HTMLElement = document.getElementById('print');
//   var index: number = 0;

//   var timerID: NodeJS.Timer = setInterval(function () {
//     var ch: string = str.charAt(index);
//     print.innerHTML = ch;
//     index++;

//     if (index > str.length) {
//       clearInterval(timerID);
//       alert('fin');
//     }
//   }, 1000);
// });

// var str: string = window.prompt('문자열을 입력해주세요.');
// var searchText: number = str.indexOf('yes');

// if (searchText >= 0) {
//   alert('해당된 문자(열)의 위치는 ' + searchText + '입니다.');
// } else {
//   alert('문자(열)가 존재하지 않습니다.');
// }

//slice()이용 방법
// var str1 = 'KOREA';
// slice()메서드는 시작 인덱스와 끝 인덱스(미포함)-1까지 문자열을 잘라내는 역할을
// 해주는 메서드이다.
// var str2 = str1.slice(2, 3);
// console.log(str1); //KOREA
// console.log(str2); //REA

//substr()이용 방법
var str1: string = 'KOREA';
//substr()메서드는 시작 인덱스에서 두 번째 매개변수의 길이만큼 잘라서 출력해주는
// //역할을 해주는 메서드이다.
var str2: string = str1.substr(2, 3);
console.log(str1); //KOREA
console.log(str2); //REA
