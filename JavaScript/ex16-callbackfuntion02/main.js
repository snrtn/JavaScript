// document.addEventListener('DOMContentLoaded', function () {
//   checkCount();
// });
document.addEventListener('DOMContentLoaded', function () {
    checkCount(showAlert);
});
function showAlert() {
    alert('good');
}
function checkCount(callback) {
    var count = 0;
    document.getElementById('btnStart').addEventListener('click', function () {
        count++;
        if (count >= 5) {
            callback(1);
        }
    });
}
