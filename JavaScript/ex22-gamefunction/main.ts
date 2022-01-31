const imgList = [
  'canada.png',
  'england.png',
  'germany.png',
  'italia.png',
  'korea.png',
  'spain.png',
  'usa.png',
];

let index: any = 0;
let banner: any = document.getElementsByClassName('banner');

document.addEventListener('DOMContentLoaded', function () {
  setInterval(function () {
    index++;
    if (index >= imgList.length) {
      index = 0;
    }
    var imgName = imgList[index];
    banner[index].setAttribute('src', './images/' + imgName);
  }, 1000);
});
