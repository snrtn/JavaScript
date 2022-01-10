// hello1 hello2 일반함수
function hello1() {
    alert('bonjour');
}
function hello2() {
    alert('salut');
}
// exec() 함수는 매개변수 값으로 함수를 받고 있다.
function exec(func) {
    func(); // 매개변수로 받은 함수를 호출하고 있다.
}
exec(hello1);
exec(hello2);
