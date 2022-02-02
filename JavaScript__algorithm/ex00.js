var data = [10, 15, 20, 25, 30];
var target = 0;
var near = 0;
var abs = 0;
var min = 100;

for (var i = 0; i < data.length; i++) {
  abs = data[i] - target < 0 ? -(data[i] - target) : data[i] - target;

  if (abs < min) {
    min = abs;
    near = data[i];
  }
}

console.log(near);
