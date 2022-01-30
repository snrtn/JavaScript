document.addEventListener('DOMContentLoaded', function () {
  let score: HTMLElement = document.getElementById('score');
  let cnt: any = 0;
  let play: boolean = true;

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
