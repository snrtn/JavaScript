interface Greeter {
  (message: string | number): void;
}

function calculator(op: string, num1: number, num2: number, callback: Greeter) {
  var result: string | number = '';

  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'not find';
  }
  callback(result);
}

function printf1(result) {
  document.write(result + '<br/>');
  // printf2(result, printf3);
}
function printf2(result) {
  // dans parameter (callback)
  document.write(result + '<br/>');
  // callback(result);
}
function printf3(result) {
  document.write(result + '<br/>');
}
function printf4(result) {
  document.write(result + '<br/>');
}

calculator('+', 500, 100, printf1);
calculator('-', 500, 100, printf2);
calculator('*', 500, 100, printf3);
calculator('/', 500, 100, printf4);

// la maintenabilité est simplement
// la lisibilité est facilement

// normal
function addbasic(n1, n2) {
  return n1 + n2;
}
var resultbasic = addbasic(200, 300);
document.write('= ' + resultbasic + '<br/>');

// callback
function add(n1: number, n2: number, callback: Greeter) {
  var temp = n1 + n2;
  callback(temp);
  document.write('= ' + temp + '<br/>');
}

function result(value: number) {
  document.write('= ' + value + '<br/>');
}

add(50, 100, result);
