let info = null;
document.addEventListener('DOMContentLoaded', function () {
    info = document.getElementById('panel');
    showRandom();
    setInterval(showRandom, 1000);
});
function showRandom() {
    let num = Math.floor(Math.random() * 6) + 1;
    info.innerHTML = 'number : ' + num;
}
