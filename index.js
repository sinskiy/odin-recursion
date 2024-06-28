function fibs(n) {
  let result = [0, 1];
  for (let i = 2; i < n; i++) {
    result = [...result, result[i - 2] + result[i - 1]];
  }
  return result;
}

function fibsIter(array, stop) {
  if (array.length === stop) return array;
  return fibsIter([...array, array.at(-2) + array.at(-1)], stop);
}

function fibsRec(n) {
  return fibsIter([0, 1], n);
}
