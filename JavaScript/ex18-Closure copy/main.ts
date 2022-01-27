document.addEventListener('DOMContentLoaded', function () {
  var btnStart = document.getElementById('btnStart');

  btnStart.addEventListener('click', function () {
    start();
    document.write('gogogo');
  });

  function start() {
    var cnt: any = 0;
    setInterval(function () {
      cnt++;
      document.write('asdasd', cnt);
    }, 2000);
  }
});
