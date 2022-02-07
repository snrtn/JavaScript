document.addEventListener('DOMContentLoaded', function () {
  var print: HTMLElement = document.getElementById('print');
  //Date클래스의 인스턴스를 얻는 코드
  var date: Date = new Date();
  var hour: number = date.getHours();
  var minute: number = date.getMinutes();
  var second: number = date.getSeconds();
  var msecond: number = date.getMilliseconds();

  print.innerHTML =
    hour + 'hour ' + minute + 'minute ' + second + '.' + msecond + 'msecond';
});

document.addEventListener('DOMContentLoaded', function () {
  var print: HTMLElement = document.getElementById('print02');
  var date: Date = new Date();
  var year: number = date.getFullYear();
  var arrMois: string[] = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  var date1: number = date.getDate();
  var day: number = date.getDay();
  var arrDay: string[] = [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ];

  print.innerHTML =
    arrDay[day] + ' ' + date1 + ' ' + arrMois[day] + ' ' + year + 'année ';
});
