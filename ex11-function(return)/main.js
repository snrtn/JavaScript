document.addEventListener('DOMContentLoaded', function () {
    function h1() {
        document.write('hi, hello');
    }
    // 버튼이 클릭이 되면 h1함수가 실행된다. 리턴 값으로 함수가 이용된것이다.
    var btnStart = document.getElementById('btnStart');
    btnStart.addEventListener('click', function () {
        h1();
    });
});
