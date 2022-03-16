export function sameFrequencyChallenge(num1: number, num2: number) {
  let obj1: any = {};
  let covertNum1 = num1.toString();
  let covertNum2 = num2.toString();


  for (let i = 0; i < covertNum1.length; i++) {
    let idx: string = covertNum1[i];
    obj1[idx] ? obj1[idx] += 1 : obj1[idx] = 1;
  }

  for (let i = 0; i < covertNum2.length; i++) {
    let idx2: string = covertNum2[i];

    if (!obj1[idx2]) {
      return false;
    } else {
      obj1[idx2] -= 1;
    }

  }
  return true;
}

export function areThereDuplicates(arr: any) {
  let obj: any = {};
  let val: any;

  for (val of arr) {
    obj[val] = (obj[val] || 0) + 1
  }

  let idx: any;

  for (idx in obj) {
    if (obj[idx] > 1) {
      return true
    }
  }

  return false;
}

export function areThereDuplicatesSolution(...args: any) {
  let collection: any = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false;
}


export function areThereDuplicatesSolution2(...args: any) {
  // Two pointers
  args.sort((a: any, b: any) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}



export function averagePair(arr: any, num: number) {
  let start = 0
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2
    if (avg === num) return true;
    else if (avg < num) start++
    else end--
  }
  return false;
}


export function neighborhood(arr: any[], num: number) {
  let result: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      result.push(i);
      if (result.length === num) break
    } else {
      result = [];
    }
    console.log(i);
  }

  return result;
}



export function twoNumberSum(array: number[], targetSum: any) {
  // Write your code here.
  let result: any = [];

  for (let i = 0; i <= array.length; i++) {
    for (let j = 0; j <= array.length; j++) {
      if (j !== i) {
        if (array[i] + array[j] === targetSum) {
          result = [array[i], array[j]]
          break;
        }
      }
    }
  }


  return result;
}




export function isValidSubsequence(array: any, sequence: any) {
  // Write your code here.
  let result: any = []
  let res = true;
  let lastIdx = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (array.indexOf(sequence[i]) < lastIdx) {
      res = false;
    }
  }

  return res;
}





export function teste32(n: number) {
  let result: string[] = [];
  let str: string = '';


  for (let i = 0; i < n; i++) {
    if (i === (n - 1)) {
      str += 'L';
      console.log(str)
    } else {
      console.log('L')
      str += 'L';
    }
  }

}



export function teste33(N: number, S: string) {



  let result: number = 0;
  switch (S) {
    case 'one':
      result = N * 1;
      break;
    case 'two':
      result = N * 2;
      break;
    case 'three':
      result = N * 3;
      break;
    case 'four':
      result = N * 4;
      break;
    case 'five':
      result = N * 5;
      break;
    default:
  }

  return result;




}


export function testNow() {
  let a: number = 0;
  let b: number = 1;
  let c: number = 0;
  let i: number = 0;

  while(i < 10){
    c = b;
    b = b + a;
    a = c;

    i++;
  }

  return b;
}