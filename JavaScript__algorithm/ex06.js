function solution(arr) {
  let answer = Math.min(...arr);
  console.log(Math.max(...arr));

  return answer;
}
let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
