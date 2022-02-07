document.addEventListener('DOMContentLoaded', function () {
    var print = document.getElementById('print');
    //Date클래스의 인스턴스를 얻는 코드
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var msecond = date.getMilliseconds();
    print.innerHTML =
        hour + 'hour ' + minute + 'minute ' + second + '.' + msecond + 'msecond';
});
document.addEventListener('DOMContentLoaded', function () {
    var print = document.getElementById('print02');
    var date = new Date();
    var year = date.getFullYear();
    var arrMois = [
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
    var date1 = date.getDate();
    var day = date.getDay();
    var arrDay = [
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
