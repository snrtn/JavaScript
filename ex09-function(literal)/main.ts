function hello(name: string) {
  document.write(name + ' bonjour' + '<br/>');
}
hello('kim');

// 변수가 함수명처럼 사용 되는 것이다.
var hellof = hello;
hellof('con');

// n'est pas nom function 익명함수
// 변수가 함수명처럼 사용 되는 것이다. 이게 함수 리터럴이다.
var func = function () {
  document.write('function literal');
};
func();
// 리터럴 literal 이란 그 자체로써의 의미르 지니는 값을 말한다.
