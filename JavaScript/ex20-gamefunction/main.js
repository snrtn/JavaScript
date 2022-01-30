document.addEventListener('DOMContentLoaded', function () {
    let score = document.getElementById('score');
    let cnt = 0;
    let play = true;
    document.getElementById('gigu').addEventListener('click', function () {
        if (play == true) {
            cnt++;
            score.innerHTML = cnt;
        }
    });
    setTimeout(function () {
        play = false;
        alert('end game');
    }, 5000);
});
