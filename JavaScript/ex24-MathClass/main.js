let cnt1 = 0;
let score1 = null;
let fish1 = null;
let play1 = false;
let timerID1 = 0;
document.addEventListener('DOMContentLoaded', function () {
    init1();
    initEvent1();
});
function init1() {
    score1 = document.getElementById('score');
    fish1 = document.getElementById('fish');
}
function initEvent1() {
    let start = document.getElementById('start');
    start.addEventListener('click', function () {
        startGame();
    });
    fish1.addEventListener('click', function () {
        addScore();
    });
}
function startGame() {
    cnt1 = 0;
    score1.innerHTML = cnt1;
    if (play1 == false) {
        checkEndGame();
        play1 = true;
        timerID1 = setInterval(function () {
            moveFish1();
        }, 1000);
    }
}
function addScore() {
    if (play1 == true) {
        cnt1++;
        score1.innerHTML = cnt1;
    }
}
function moveFish1() {
    var x = Math.floor(Math.random() * 480);
    var y = Math.floor(Math.random() * 330);
    fish1.style.top = y + 'px';
    fish1.style.left = x + 'px';
}
function checkEndGame() {
    setTimeout(function () {
        play1 = false;
        clearInterval(timerID1);
        alert('fini');
    }, 10000);
}
