// Multiple Pointers Pattern 
export function sumZero(arr: number[]) {
  let left: number = 0;
  let right: number = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}



// Multiple Pointers Pattern Challenge
export function uniqueValues(arr: number[]) {
  let left: number = 0;
  let right: number = arr.length - 1;
  const res: any = {};  
  while (right >= 0) {
    if (arr[right] in res) {
      right--;
    } else {
      res[arr[right]] = (res[arr[right]] || 0) + 1;
      right--;
    }
  }
  return Object.keys(res).length
}



// [-2, -1, -1, 0, 1, 2, 2, 3, 3]