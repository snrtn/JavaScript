function solution(s) {
  let answer = 0;

  // let answer = '';
  //console.log(s.indexOf("K"));

  // for (let i = 0; i < s.length; i++) {
  //   if (s.indexOf(s[i]) === i) {
  //     answer += s[i];
  //   }

  //   //console.log(s[i], i, s.indexOf(s[i]));
  // }

  let pos = s.indexOf('k');
  while (pos !== -1) {
    answer++;
    pos = s.indexOf('k', pos + 1);
  }

  return answer;
}
console.log(solution('ksekkset'));
