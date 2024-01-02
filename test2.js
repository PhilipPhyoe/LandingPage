var count = 0;
const target = 7;
/*
function counter(i) {
  setTimeout(() => {
    console.log(i);
  }, 200 * i);
}
while (count <= target) {
  counter(count);
  count++;
}
*/

while (count <= target) {
  function counter(i) {
    setTimeout(() => {
      console.log(i);
    }, 300 * i);
  }
  counter(count);
  count += 1;
}
