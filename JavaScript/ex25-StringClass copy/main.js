// var str: string = '반갑습니다.x님 자바스크립트 공부 중입니다.';
// var replaceStr: string = window.prompt('이름을 입력해주세요!');
// var resultStr: string = str.replace('x', replaceStr);
// document.write(str + '<br/>');
// document.write(resultStr + '<br/>');
// var str: string = '반갑습니다-홍길동님';
// var resultStr: string = str.slice(0, 5) + str.slice(6, str.length);
// document.write(str + '<br/>');
// document.write(resultStr + '<br/>');
// var str: string = '   반갑습니다-   홍길동님   ';
//trim()이라는 메서드를 사용을 하면 앞뒤 공백을 쉽게 없앨 수 있다.
//trim()는 문자열 중간에 차지하는 공백은 제거를 할수가 없다.
// var resultStr: string = str.trim();
// console.log(str);
// console.log(resultStr);
document.addEventListener('DOMContentLoaded', function () {
    var output = document.getElementById('output');
    var input = document.getElementById('input');
    //버튼 이벤트 등록
    document.getElementById('confirm').addEventListener('click', function () {
        //입력한 값을 알아내기
        var value = input.value;
        //앞쪽(왼쪽) 공백 문자 제거
        var result = ltrim(value);
        output.innerHTML = value;
        output.innerHTML = result;
    });
});
//앞쪽 공백 제거 함수
function ltrim(str) {
    //문자열이 없는 경우
    if (str.length <= 0) {
        return '';
    }
    //첫 번째 문자가 공백이 아니라면 검사할 필요가 전혀 없다.
    // var firstChar: string = str.charAt(0);
    // if (firstChar != ' ') {
    //   return str;
    // }
    // var index: number;
    // //공백이 끝나는 위치 찾기
    // for (index = 1; index < str.length; index++) {
    //   //공백 문자가 아닐 때까지 찾기
    //   var ch: string = str.charAt(index);
    //   if (ch != ' ') {
    //     //공백이 아니다라는 것은 곧 문자를 의미해서
    //     break;
    //   }
    // }
    // index위치에서 마지막 위치까지의 문자열을 잘라내고 있다.
    // var result: string = str.slice(index, str.length);
    // 전체 공백 제거
    var result = str.replace(/(\s*)/g, '');
    return result;
}
// var str = '  안녕하세요   반갑습니다   문자열을 자릅니다   ';
// console.log('원본 문자열:' + str);
// //정규표현식의 종류
// // ^ : 입력의 시작을 찾음
// // $ : 입력의 끝을 찾음
// // * : 앞에 오는 문자를 0번 이상 찾는다.
// //     (ex "zo*"를 입력하면 "z"나 "zoo"를 찾는다.)
// // + : 앞에 오는 문자를 1번 이상 찾는다.
// //     (ex "zo+"를 입력하면 "z"는 찾지 않고 "zoo"를 찾는다.)
// // ? : 앞에 오는 문자를 0번 이상 찾는다.
// //      (ex "a?ve?"를 입력하면 "naver"에 있는 "ve"를 찾는다.)
// // \s : 공백문자를 찾는다.
// // \S : 공백문자가 아닌 것을 찾는다.
// // g : 전역검색을 칭함
// //전체 공백 제거는 자바스크립트의 정규표현식을 이용을 해야 한다.
// console.log('전체 공백 제거:' + str.replace(/(\s*)/g, ''));
// console.log('앞 공백 제거:' + str.replace(/^\s*/, ''));
// console.log('뒷 공백 제거:' + str.replace(/\s*$/, ''));
