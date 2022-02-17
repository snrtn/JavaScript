var ascNames = ['BBB', 'FFF', 'AAA', 'DDD', 'EEE'];

//문자(열)기반으로 내림차순으로 정렬을 하고자 한다면 아래와 같이 정렬기준을
//익명함수로 제공을 해야한다.
ascNames.sort(function (a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
});

console.log(ascNames);
