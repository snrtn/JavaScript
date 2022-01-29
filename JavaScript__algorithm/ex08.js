// function forEach(predicate, thisArg) {
//   for (let i = 0; i < a.length; i++) {
//     predicate(a[i], i);
//   }
// }

a = [10, 11, 12, 13, 14, 15];
a.forEach(
  function (v, i) {
    console.log(v, i, this);
  },
  [1, 2],
);

// function map(predicate, thisArg) {
//   let list = [];
//   for (let i = 0; i < a.length; i++) {
//     list.push(predicate(a[i], i));
//   }
//   return list;
// }

let answer = a.map(
  function (v, i) {
    if (v % 2 == 0) return v;
  },
  [1, 2],
);
console.log(answer);
