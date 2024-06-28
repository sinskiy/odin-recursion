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

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftArr = mergeSort(arr.slice(0, middle));
  const rightArr = mergeSort(arr.slice(middle));
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
