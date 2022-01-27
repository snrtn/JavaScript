// document.addEventListener('DOMContentLoaded', function () {
//   checkCount();
// });

// function checkCount() {
//   var count: number = 0;
//   document.getElementById('btnStart').addEventListener('click', function () {
//     count++;
//     if (count >= 5) {
//       alert('good');
//     }
//   });
// }

//  callback
interface Greeter1 {
  (message: string | number): void;
}

document.addEventListener('DOMContentLoaded', function () {
  checkCount(showAlert);
});

function showAlert() {
  alert('good');
}

function checkCount(callback: Greeter1) {
  var count: number = 0;
  document.getElementById('btnStart').addEventListener('click', function () {
    count++;
    if (count >= 5) {
      callback(1);
    }
  });
}
