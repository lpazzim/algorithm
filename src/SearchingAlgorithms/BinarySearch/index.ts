
// [1,2,3,4,5,6,7,8,9,10,11,22]

export function binarySearch(arr: number[], n: number) {
  let left: number = 0;
  let right: number = arr.length - 1;
  let avg: number = Math.floor((left + right) / 2);

  while (arr[avg] !== n && left <= right) {
    if (n < arr[avg]) {
      right = avg - 1;
    } else {
      left = avg + 1;
    }
    avg = Math.floor((left + right) / 2);
  }

  if (arr[avg] === n) return avg;
  return -1
}


// Example of a binarySearch
function binarySearchExample1(arr: any, elem: number) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}


// Refactored Version
function binarySearchRefactored(arr: any, elem: number) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}