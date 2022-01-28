function solution(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;

  for (let x of arr) {
    if (x % 2 == 1) {
      sum += x;
      if (x < min) {
        min = x;
      }
    }
  }
  answer.push(sum);
  answer.push(min);

  return answer;
}
let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
