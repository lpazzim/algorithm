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




// Multiple Pointers Pattern Challenge Example
export function countUniqueValues(arr: any){
  if(arr.length === 0) return 0;
  var i = 0;
  for(var j = 1; j < arr.length; j++){
      if(arr[i] !== arr[j]){
          i++;
          arr[i] = arr[j]
      }
  }
  return i + 1;
}



// [-2, -1, -1, 0, 1, 2, 2, 3, 3]