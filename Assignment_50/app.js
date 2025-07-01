let arr = [3, 23, 7, 17, 42, 9, 22, 4, 33, 88, 13, 27, 10, 64];
let res = document.getElementById("result");
function isEven(arr) {
  let rem = arr % 2;
  return rem === 0;
}
function isOdd(arr) {
  let rem = arr % 2;
  return rem !== 0;
}
let even = arr.filter(isEven);
let odd = arr.filter(isOdd);
function showE() {
  res.innerHTML = even;
}
function showO() {
  res.innerHTML = odd;
}
