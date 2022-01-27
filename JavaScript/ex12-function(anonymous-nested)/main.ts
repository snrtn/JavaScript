// setInterval()는 윈도우 전역객체에 존재하며 타이머 함수의 일종이다.
// 주어진 시간동안 지연하다가 주어진 함수를 실행한다.
// setInterval(function () {
//   document.write('hi hello' + '<br/>');
// }, 3000);

// 중첩함수
function h1() {
  // 중첩함수가 들어가 있다.
  function hello3(name: string) {
    document.write(name + ' hello');
  }
  return hello3; //리턴값으로 중접함수를 넘기고 있다.
}

// h1()가 func12에게 중첩함수를 주었다.
var func12 = h1();
func12('Kim');
