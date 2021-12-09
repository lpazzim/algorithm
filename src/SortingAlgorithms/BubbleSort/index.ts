// UNOPTIMIZED VERSION OF BUBBLE SORT
export function bubbleSort(arr: any) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// ES2015 Version
export function bubbleSortES2015Version(arr: any) {
  const swap = (arr: any, idx1: any, idx2: any) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}



//OPTIMIZED VERSION OF BUBBLE SORT *** Optimized with noSwaps ***
export function bubbleSortNoSwaps(arr: any) {
  let noSwaps: boolean;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

// ES2015 Version *** Optimized with noSwaps ***
export function bubbleSortES2015VersionNoSwaps(arr: any) {
  let noSwaps: boolean;
  const swap = (arr: any, idx1: any, idx2: any) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    noSwaps = false;
  };

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

