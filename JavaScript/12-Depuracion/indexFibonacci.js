function fibonacci(num) {
  let array = [1, 1];
  for (let i = 2; i < num; i++) {
    array = [...array, array[i - 1] + array[i - 2]];
  }
  return array;
}
console.log(fibonacci(8));
