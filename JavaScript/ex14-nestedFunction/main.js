// function calculator(op: string, num1: number, num2: number) {
//   var result: string | number = '';
//   switch (op) {
//     case '+':
//       result = add(num1, num2);
//       break;
//     case '-':
//       result = sub(num1, num2);
//       break;
//     case '*':
//       result = mul(num1, num2);
//       break;
//     case '/':
//       result = div(num1, num2);
//       break;
//     default:
//       result = 'not find';
//   }
//   // nestedFunction
//   function add(num1: number, num2: number) {
//     return num1 + num2;
//   }
//   function sub(num1: number, num2: number) {
//     return num1 - num2;
//   }
//   function mul(num1: number, num2: number) {
//     return num1 * num2;
//   }
//   function div(num1: number, num2: number) {
//     return num1 / num2;
//   }
//   // 중요함
//   return result;
// }
// document.write('result : ' + calculator('+', 100, 200), '<br/>');
// document.write('result : ' + calculator('-', 100, 200), '<br/>');
// document.write('result : ' + calculator('*', 100, 200), '<br/>');
// document.write('result : ' + calculator('/', 100, 200), '<br/>');
// global variables
var a = 100;
var b = 200;
var c = 300;
function outter() {
    // local variables
    var b = 2000;
    var c = 3000;
    // nestedFunction
    function inner() {
        var c = 30000;
        document.write('1.a = ' + a + '<br/>'); // 100
        document.write('2.b = ' + b + '<br/>'); // 2000
        document.write('3.c = ' + c + '<br/>'); // 30000
    }
    inner(); // call nestedFunction
}
outter();
