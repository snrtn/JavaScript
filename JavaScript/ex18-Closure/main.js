// function add() {
//   var cnt: number = 0;
//   cnt++;
//   return cnt;
// }
// document.write('1 ' + add() + '</br>');
// document.write('2 ' + add() + '</br>');
// document.write('3 ' + add() + '</br>');
// document.write('4 ' + add() + '</br>');
// document.write('5 ' + add() + '</br>');
// Closure
function createCounter() {
    var cnt = 0; // jai util local
    function add() {
        cnt++;
        // il prend local variable
        // donc il a memori
        return cnt;
    }
    return add;
}
var counter = createCounter();
document.write('5 ' + counter() + '</br>');
document.write('5 ' + counter() + '</br>');
document.write('5 ' + counter() + '</br>');
document.write('5 ' + counter() + '</br>');
