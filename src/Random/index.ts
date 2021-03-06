
// function getRandom(floor: number, ceiling: number) {
//   return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
// }

import { parse } from "../Codewars";


// export function sumPairs(ints: number[], s: number): [number, number] | void {
//   let a, i,
//     hash = Object.create(null);

//   for (i = 0; i < ints.length; i++) {
//     a = ints[i];
//     if (hash[s - a]) {
//       return [s - a, a];
//     }
//     if (!hash[a]) {
//       hash[a] = true;
//     }
//   }
// }


// let l1: number[] = [1, 4, 8, 7, 3, 15]
// let count: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(sumPairs(l1, 8));

// function forCountUpTo(x: number) {
//   for (let i = 0; i <= x; i++) {
//     console.log('for', i);
//   }
// }

// function foreachCountUpTo(arr: number[]) {
//   arr.forEach((e) => {
//     console.log('foreach', e);
//   })
// }

// function whileCountUpTo(x: number) {
//   let i: number = 0;
//   while (i <= x) {
//     console.log('while', i);
//     i++;
//   }
// }

// whileCountUpTo(10);
// forCountUpTo(10);
// foreachCountUpTo(count);



// function jumpingNumber(n: number) {
//   let res: any = true;
//   if (n <= 9) {
//     return 'Jumping!!';
//   } else {
//     var x = String(n).split("").map((num) => {
//       return Number(num)
//     })
//     console.log(x);

//     x.reduce(function (accum, curr) {
//       if (accum - curr === 1 || curr - accum === 1) {
//         if (res) {
//           res = true;
//         }
//       } else {
//         res = false
//         return accum
//       }
//       accum = curr;
//       return accum
//     });

//     if (res) {
//       return 'Jumping!!';
//     } else {
//       return 'Not!!'
//     }
//   }
// }


// jumpingNumber(23643);




// export function mergerNow(arr1: number[], arr2: number[]) {
//   let result: number[] = [];
//   let i: number = 0;
//   let j: number = 0;


//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       result.push(arr1[i]);
//       i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     result.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     result.push(arr2[j]);
//     j++;
//   }

//   return result;

// }

// export function mergeSortNow(arr: number[]) {

//   if (arr.length <= 1) return arr

//   let middle = Math.floor(arr.length / 2);
//   let left: number[] = mergeSortNow(arr.slice(0, middle));
//   let right: number[] = mergeSortNow(arr.slice(middle));

//   return mergerNow(left, right)
// }



export function praticeReduce() {
  const arr: number[] = [0, 5, 2, 8, 9, 12, 15, 3, 25, 82, 41, 54]
  let result: number = 0;

  arr.reduce((a, b) => {

    result = a + b;
    return a + b
  })

  return result;
}


/**
 * Write a function to search for n when n is the number passing into the function to find the closest seats in an airplane;
 */
let airrplane: any[] = [
  [0, 1, 0, 1, 0, 1],
  [0, 0, 0, 1, 1, 1],
  [0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
  [0, 1, 0, 0, 0, 0],
];


export function findSeats(arr: any[], numSeats: number) {
  let result: { line: number, seats: any[] } = { line: 0, seats: [] };
  let auxLine: number = 0;
  let selectedSeats: any[] = [];

  for (let i = 0; i < arr.length; i++) {

  }


  return result;
}


export function binarySearch1701(arr: number[], n: number) {
  let left: number = 0;
  let right: number = arr.length - 1;
  let middle: number = Math.floor((left + right) / 2);

  while (arr[middle] !== n && left <= right) {
    if (n < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }

  if (arr[middle] === n) return middle;
  return -1;
}


export function slidingPratice(arr: number[], n: number) {
  let maxSum: number = 0;
  let tempSum: number = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let j = n; j < arr.length; j++) {
    tempSum = tempSum - arr[j - n] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}


export function strChallenge(str: string) {
  let arr: string[] = str.split('');
  let result: string = '';
  let tipo: boolean = false;
  const challengeToken: string = 'vqy6cnz3';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) >= 48 && arr[i].charCodeAt(0) <= 57) {
      if ((parseInt(arr[i]) % 2) !== 0) {
        if (tipo === true) {
          result += '-' + arr[i];
        } else {
          result += arr[i];
        }
        tipo = true;
      } else {
        result += arr[i];
        tipo = false;
      }
    } else {
      result += arr[i];
    }
  }
  return `${result}:${challengeToken}`;
}

export function ArrayChalleng(arr: number[]) {
  let result: number = 1;

  arr.reduce((a: number, b: number) => {
    if (a < b) {
      result++;
    }
    return b
  })
  return result;
}


export function MathChallenge(num: number) {
  if (Number.isInteger(Math.sqrt(num))) return true
  return false;
}




export function countLettersNow(str: string) {
  let arr: string[] = str.split('');
  let obj: any = {};

  for (let val of arr) {
    obj[val] = (obj[val] || 0) + 1;
  }

  return obj
}


export function fib(n: number) {
  if(n === 0) return 1
  if(n === 1) return 1

  let x:number = fib(n-1) + fib(n-2)
  
  console.log(x)

  return x;
}