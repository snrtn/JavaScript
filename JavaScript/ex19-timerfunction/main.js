document.addEventListener('DOMContentLoaded', function () {
    const contents = document.getElementById('contents');
    let cnt = 0;
    let timerID = 0;
    //익명함수 풀이
    // setInterval(function(){
    //     cnt++;   //값을 증가
    //     $contents.text(cnt); //text()를 이용하여 div영역에 출력을 하고 있다.
    // }, 1000);    //단위가 밀리초이므로 현재는 1초다.
    //익명함수 풀이
    // timerID = setInterval(function () {
    //   cnt++;
    //   contents.innerHTML = cnt; //text()를 이용하여 div영역에 출력을 하고 있다.
    // }, 1000); //단위가 밀리초이므로 현재는 3초다.
    // document.getElementById('stop').addEventListener('click', function () {
    //   //alert("멈춥니다.");
    //   clearInterval(timerID);
    // });
    // 일반함수 풀이
    function addCnt() {
        cnt++;
        contents.innerHTML = cnt;
    }
    timerID = setInterval(addCnt, 1000);
    document.getElementById('stop').addEventListener('click', function () {
        alert('멈춥니다.');
        clearInterval(timerID);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const contents = document.getElementById('contents02');
    //익명함수 풀이
    //setTimeout()함수는 duration밀리초 후에 단 한번만 실행이 되는 함수
    // setTimeout(function(){
    //     $contents.text("안녕하세요!자바스크립트 언어!"); //text()를 이용하여 div영역에 출력을 하고 있다.
    // }, 3000);    //단위가 밀리초이므로 현재는 3초다.
    //일반함수 풀이
    function diplayText() {
        contents.innerHTML = '안녕하세요!자바스크립트 언어!';
    }
    setTimeout(diplayText, 3000);
});
