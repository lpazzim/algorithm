
// // Count the Digit
// export function nbDig(n: number, d: number): number {
//   //n = number and d digit 
//   // create a obj to count
//   let obj: any = {}

import { countDown } from "../Recursion";
import { mergeSortLetters } from "../SortingAlgorithms/MergeSort";

//   // square all number 0 <= k <= n and add in "obj"
//   for (let i = 0; i <= n; i++) {
//     if (i <= n) {
//       const aux = i ** 2;
//       obj[aux] = (obj[aux] || 0) + 1;
//     } else {
//       obj[i] = (obj[i] || 0) + 1;
//     }
//   }

//   let val: any;
//   let result: any = {};

//   for (val in obj) {
//     let arr = val.split('');
//     arr = arr.sort(function (a: any, b: any) { return a - b; });
//     function countdig(list: any[]) {
//       if (!list.find(e => e === d.toString()) || list.length === 0) return;
//       if(d.toString() === list[0]){
//         result[d.toString()] = (result[d.toString()] || 0) + 1;
//       }
//       countdig(list.slice(1));
//     }

//     countdig(arr);
//   }
//   return result
// }


// // Count the Digit Refactor
// export function nbDig(n: number, d: number): number {
//   //n = number and d digit 
//   // create a obj to count
//   let result: any = {};

//   // square all number 0 <= k <= n and add in "obj"
//   for (let i = 0; i <= n; i++) {
//     if (i <= n) {
//       const aux = (i ** 2).toString().split('');
//       const re = new RegExp(d.toString(), "g");
//       if(re.test(d.toString())){
//         countdig(aux);
//       }
//     } else {
//       const item = i.toString().split('');
//       const re = new RegExp(d.toString(), "g");
//       if(re.test(d.toString())){
//         countdig(item);
//       }
//     }

//     function countdig(list: any[]) {
//       const re = new RegExp(d.toString(), "g");
//       if(!re.test(d.toString()) || list.length === 0) return;
//       if(d.toString() === list[0]){
//         result[d.toString()] = (result[d.toString()] || 0) + 1;
//       }
//       countdig(list.slice(1));
//     }
//   }

//   return result[d];
// }





// // Count the Digit Refactor 2
// export function nbDig(n: number, d: number): number {
//   //n = number and d digit 
//   // create a obj to count
//   let result: any = {};

//   function countdig(count: number) {
//     if (count < 0) return;
//     let converCount: string;
//     if (count <= n) {
//       converCount = (count ** 2).toString();
//     } else {
//       converCount = d.toString();
//     }

//     let listValues: any = converCount.split('');

//     const re = new RegExp(converCount, "g");
//     if (!re.test(converCount) || listValues.length === 0) return;

//     if (converCount === listValues[0]) {
//       result[converCount] = (result[converCount] || 0) + 1;
//     }
//     countdig(count - 1);
//   }

//   countdig(n);

//   return result[d];
// }


// export function testeMatch(mainStr: string){
//   console.log(mainStr.split("0").length - 1);

// }

// Count the Digit Refactor
export function nbDig(n: number, d: number): number {
  //n = number and d digit 
  // create a obj to count
  let result: any = {};
  let digit: string = d.toString();

  // square all number 0 <= k <= n and add in "obj"
  for (let i = 0; i <= n; i++) {
    const aux = (i ** 2).toString().split(digit);
    console.log('aux', aux);
    result[digit] = (result[digit] || 0) + aux.length - 1;
  }

  return result[d];
}




// Convert number to binary
export function singleDigit(n: number) {
  let result: number = 0;


  function sumBinary(n: number) {
    if (n <= 9) {
      result = n
      return;
    } else {
      sumBinary(n.toString(2).split("1").length - 1);
    }
  }

  sumBinary(n);

  return result;
}

//Solution of Drone Fly-By Codewars
export function flyBy(lamps: string, drone: string): string {
  // your code here

  let i: number = 0;
  let result: any = [];
  let droneLine: any = drone.split("");
  let lampLine: any = lamps.split("");

  for (let j = 0; j < lampLine.length; j++) {
    if (droneLine.length > i) {
      result.push('o')
    } else {
      result.push('x')
    }
    i++;
  }

  return result.toString().replace(/,/g, "");

}




export function add(num1: number, num2: number): number {
  let converNum1: any = num1.toString().split('');
  let converNum2: any = num2.toString().split('');
  const result: any = [];
  let size = Math.floor(converNum1.length - 1 + converNum2.length - 1);

  if (size === 1) size++;

  if (converNum1.length === 1 && converNum2.length === 1) {
    return num1 + num2;
  }

  let i: number = converNum1.length - 1;
  for (let j = converNum2.length - 1; size >= 1; size--) {
    let x: number = Number(converNum1[i]) ? Number(converNum1[i]) : 0;
    let y: number = Number(converNum2[j]) ? Number(converNum2[j]) : 0;

    result.unshift(x + y);
    i--;
    j--;
  }

  return Number(result.toString().replace(/,/g, ""));
}



export function F(n: number): number {
  if (n === 0) {
    return 1;
  }

  return n - M(F(n - 1));

}

export function M(n: number): number {
  if (n === 0) {
    return 0;
  }

  return n - F(M(n - 1));
}







export function digPow(n: number, p: number) {
  const arrDigits: any = n.toString().split("");
  let arrResult: any = [];
  let sum = 0;

  let result: number;

  for (let i = 0; i < arrDigits.length; i++) {
    arrResult.push(Number(arrDigits[i]) ** (p + i));
  }

  arrResult.reduce((a: any, b: any) => {
    sum = a + b;
    return sum;
  })

  result = (Math.round(sum / n) * n) === sum ? (sum / n) : -1;

  return result;
}


export function isValidWalk(walk: string[]) {
  let x: number = 0;
  let y: number = 0;

  if (walk.length !== 10) return false;

  for (let i = 0; i <= walk.length; i++) {
    switch (walk[i]) {
      case 'n': {
        y++;
        break
      }
      case 's': {
        y--;
        break
      }
      case 'e': {
        x++;
        break
      }
      case 'w': {
        x--;
        break
      }
      default: {
        break
      }
    }
  }

  return ((x === 0) && (y === 0)) ? true : false;
}





export function bouncingBall(h: number, bounce: number, window: number): number {
  // your code
  if (!h || bounce < 0 || bounce > 1 || window > h || h === window) return -1;

  let result: number = 1;

  function bounceBall(x: number) {
    let ballPassInFrontWindow: number = (x * bounce);

    if (ballPassInFrontWindow < window) return result;

    if (ballPassInFrontWindow === window) {
      return result;
    } else if (ballPassInFrontWindow > window) {
      result += 2;
    }

    bounceBall(ballPassInFrontWindow);
  }

  bounceBall(h);

  return result;
}





export function smallestOld(n: number): number[] {
  // your code
  const result: any[] = [];
  const arr: any[] = n.toString().split('');
  let startIndex: any = null;
  let swapIndex: any = null;
  let swap: boolean = false;
  let temp: number = parseInt(arr[0]);


  for (let i = 0; i < arr.length; i++) {
    startIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (temp > parseInt(arr[j])) {
        temp = parseInt(arr[j]);
        swapIndex = j;
      }
    }

    if (temp < parseInt(arr[i])) {
      swap = true;

      arr.splice(swapIndex, 1);

      arr.unshift(temp);

      result.push(parseInt(arr.toString().replace(/,/g, "")));

      console.log('parseInt(result[startIndex])', arr[startIndex]);
      console.log('parseInt(result[0][startIndex])', arr[swapIndex]);

      if (parseInt(arr[startIndex]) < parseInt(arr[swapIndex])) {
        result.push(parseInt(startIndex));
        result.push(parseInt(swapIndex));
      } else {
        result.push(parseInt(swapIndex));
        result.push(parseInt(startIndex));
      }


    }
    if (swap) break;
  }


  return result;
}



export function oper(fct: (s: string) => string, s: string): string {
  return fct('Lucas') + s;
}


export const laser = (f: Function, str: string): string => `${str + f()}`
// console.log(laser(() => ' volts!', 'Lucas'))



// Moves in squared strings (I)

export function splitAndMerge(str: string) {
  let convertString = str.replace(/(\r\n|\n|\r)/gm, '');

  console.log(convertString);
  mergeSortLetters(convertString);
}





export function adjacentElementsProduct(arr: number[]): number {
  let i: number = 0;
  let j: number = i + 1;
  let result: number = arr.length > 0 ? arr[i] * arr[j] : 0;

  if (arr.length === 2) {
    return result;
  }

  function findNumber(list: number[]) {
    if (list.length === 0) {
      return
    }

    if ((list[i] * list[j]) > result) result = list[i] * list[j];
    findNumber(list.slice(1));
  }

  findNumber(arr);

  return result;
}



export const findOdd = (xs: number[]): number => {
  // happy coding!
  let frequencyCount: any = {};
  let result: number = 0;
  let count: number = 0;

  if (xs.length === 0) return xs[0];

  for (let i of xs) {
    frequencyCount[i] = (frequencyCount[i] || 0) + 1
  }

  for (let j in frequencyCount) {
    if (count < frequencyCount[j] && ((parseInt(frequencyCount[j]) % 2) !== 0)) {
      result = parseInt(j);
      count = parseInt(j);
    }
  }

  return result;
};


// export function meeting(s: string): string {
//   let result: string[] = [];
//   let arr: any[] = s.toUpperCase().split(";");
//   let surName: string = arr[0].split(':').pop();
//   let start: number = 0;
//   let end: number = arr.length - 1;

//   while (start <= end || arr.length > 0) {
//     if (arr[start] && surName === arr[start].split(':').pop()) {
//       result.push(arr[start]);
//       arr.splice(start,1); 
//     } else {
//       start++;
//     }
//   }



//   return '';
// }

export function mergeSort(arr1: any[], arr2: any[]) {
  let result: any = [];
  let i: number = 0;
  let j: number = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i].split(":").pop() < arr2[j].split(':').pop()) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}



export function sortSurname(s: string) {
  let arr = s.toUpperCase().replace(/,/g, ';').split(';');

  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let left: any[] = sortSurname(arr.slice(0, middle).toString());
  let right: any[] = sortSurname(arr.slice(middle).toString());

  return mergeSort(left, right);
}




export function meeting(s: string): string {
  let arr = sortSurname(s);
  let result: string = '';
  var currentVal;

  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; (j >= 0) && (arr[j] > currentVal) && ((currentVal.split(":").pop() === arr[j].split(":").pop())); j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal;
  }

  for (var i = 0; i < arr.length; i++) {
    const idx = arr[i].indexOf(':')
    const firstName = arr[i].slice(0, idx);
    result += `(${arr[i].split(":").pop()}, ${firstName})`;
  }

  return result;
}



// export function partsSums(ls: number[]): number[] {
//   let result: any = [];
//   let sumResult: number = 0;

//   function sumParts(list: number[]) {
//     sumResult = 0;
//     if (list.length === 0) {
//       sumResult = 0;
//       result.push(sumResult);
//       return;
//     }
//     if (list.length === 1) {
//       sumResult = list[0];
//     }
//     if (list.length > 1) {
//       for (let i = 0; i < list.length; i++) {
//         sumResult += list[i];
//       }

//     }
//     result.push(sumResult);
//     sumParts(list.slice(1));

//     return result;
//   }

//   sumParts(ls);

//   return result;
// }


export function partsSums(ls: number[]): number[] {
  let result: any = [];
  let sumResult: number = 0;

  if (ls.length <= 0) {
    result.push(sumResult);
    return result;
  }

  for (let i = 0; i < ls.length; i++) {
    sumResult = ls[i];
    for (let j = i + 1; j < ls.length; j++) {
      sumResult += ls[j];
    }
    result.push(sumResult);
    break
  }

  for (let i = 0; i < ls.length; i++) {
    sumResult -= ls[i]
    result.push(sumResult);
  }

  return result;
}





function mergeSortNow(arr1: number[], arr2: number[]) {
  let result: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;

  }

  return result;
}


function secondPartMergeSort(arr: number[]) {
  if (arr.length <= 1) return arr;

  let middle: number = Math.floor(arr.length / 2)
  let left: number[] = secondPartMergeSort(arr.slice(0, middle))
  let right: number[] = secondPartMergeSort(arr.slice(middle));

  return mergeSortNow(left, right);
}


export function chooseBestSum(t: number, k: number, ls: number[]): any {
  let result = 0

  function calc(sum: number = 0, count: number = 0, idx: number = 0) {
    if (count === k) {
      if (sum <= t && sum > result) {
        result = sum
      }
      return
    }
    for (let i = idx; i < ls.length; i++) {
      console.log(sum + ls[i]);
      calc(sum + ls[i], count + 1, i + 1)
    }
  }
  calc()
  return result || null
}



export function sqInRect(l: number, w: number): number[] | null | undefined {
  // your code
  let result: any[] = [];
  let x: number = 0;
  let y: number = 0;
  let countSquare: number = 0;
  if (l === w) return null;

  while (x < w && y < l) {
    x++;
    y++;

    if (x === y && (x * y) !== 1 && (x === w || y === l)) {
      countSquare += x;
      result.push(countSquare);
      countSquare = 0;
    }
  }

  while (y < l) {
    y++;
    countSquare += 1;
    if (countSquare <= w && countSquare !== 1) {
      result.push(countSquare);
      x = countSquare;
      countSquare = 0;
    }

    if (x === w && countSquare === 1) {
      result.push(1);
    }
  }

  while (x < w) {
    x++;
    countSquare += 1;
    if (countSquare <= l && countSquare !== 1) {
      result.push(countSquare);
      y = countSquare;
      countSquare = 0;
    }
    if (y === l && countSquare === 1) {
      result.push(1);
    }
  }
  return result;
}







export function sqInRectRecu(l: number, w: number): number[] | null | undefined {
  // your code
  let result: any[] = [];
  let arr: any[] = [];
  let count: number = (l * w);
  if (l === w) return null;

  function calc(x: number) {
    let res: any = Math.sqrt(x - 1);
    if (x <= 0) return

    if (Number.isInteger(res)) {
      if (res === 0) {
        result.push(1);
      } else {
        result.push(res);
      }
    }

    calc(x - 1);
    return
  }

  calc(count);
  return result;
}




export function smallest(n: number): number[] {
  // your code
  const result: any[] = [];
  const arr: any[] = n.toString().split('');
  let startIndex: any = null;
  let swapIndex: any = null;
  let swap: boolean = false;

  for (let i = 0; i < arr.length; i++) {
    startIndex = i;
    let temp: number = parseInt(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      if (temp > parseInt(arr[j])) {
        temp = parseInt(arr[j]);
        swapIndex = j;
      }
    }

    if (temp < parseInt(arr[i])) {
      swap = true;
      let auxArr: any[] = [];
      let idx: number = 0;
      let value1 = arr[swapIndex];
      let current: any = null;

      while (idx < arr.length) {
        if (idx !== swapIndex) {
          if (idx === startIndex) {
            auxArr.push(value1);
            current = arr[idx];
          } else {
            if (current) {
              auxArr.push(current);
              current = null;
            }
            auxArr.push(arr[idx]);
          }
        }
        idx++;
      }

      let value2 = arr[startIndex];
      result.push(parseInt(auxArr.toString().replace(/,/g, "")));
      if (swapIndex === 0) {
        if (auxArr[swapIndex] > auxArr[startIndex]) {
          result.push(parseInt(startIndex));
          result.push(parseInt(swapIndex));
        } else {
          result.push(parseInt(swapIndex));
          result.push(parseInt(startIndex));
        }
      } else {
        result.push(parseInt(swapIndex));
        result.push(parseInt(startIndex));
      }

    }
    if (swap) break;
  }


  return result;
}



export function nbMonths(startPriceOld: number, startPriceNew: number, savingperMonth: number, percentLossByMonth: number): number[] {
  let result: number[] = [];
  const percentCalc: number = percentLossByMonth / 100;
  let numberMonths: number = 0;
  let savingMoney: number = savingperMonth;
  let controlLossCalc = 0;
  let lossCalc: number = percentCalc;


  function eachMonthCalc(priceOld: number, priceNew: number) {
    let total: number = 0;
    if (controlLossCalc >= 1) {
      lossCalc += (0.5 / 100);
      controlLossCalc = 0;
    } else {
      controlLossCalc++;
    }
    let priceOldDecreased: number = (priceOld - (priceOld * lossCalc));
    let priceNewDecreased: number = (priceNew - (priceNew * lossCalc));

    if (numberMonths !== 0) {
      savingMoney = savingMoney + savingperMonth;
    }

    if (startPriceNew < startPriceOld) {
      total = startPriceOld - startPriceNew;
      result.push(numberMonths);
      result.push(total);
      return total;
    }

    numberMonths++;

    total = (priceOldDecreased - priceNewDecreased + savingMoney);

    if (total >= 0) {
      result.push(numberMonths);
      result.push(Math.round(total));
      return total;
    }

    eachMonthCalc(priceOldDecreased, priceNewDecreased);
    return total;
  }

  eachMonthCalc(startPriceOld, startPriceNew);


  return result;
}




// Are they the "same"?
// https://www.codewars.com/kata/550498447451fbbd7600041c
function merge(arr1: number[], arr2: number[]) {
  let result: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}


function mergeSortnow(arr: number[]) {

  if (arr.length <= 1) return arr;


  let middle: number = Math.floor(arr.length / 2);
  let left: number[] = mergeSortnow(arr.slice(0, middle));
  let right: number[] = mergeSortnow(arr.slice(middle));;

  return merge(left, right);

}


export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 === null || a2 === null) return false;
  if (a1.length !== a2.length) return false;

  let compArr: number[] = [];

  for (let i = 0; i < a1.length; i++) {
    compArr.push(a1[i] ** 2);
  }

  let sortedArr1: number[] = mergeSortnow(compArr);
  let sortedArr2: number[] = mergeSortnow(a2);
  let x: number = 0;
  while (x < a1.length) {
    if (sortedArr1[x] !== sortedArr2[x]) {
      return false;
    }
    x++;
  }

  return true;
}



// Make the Deadfish swim
// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript
/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
  let result: number[] = [];
  let arrData: string[] = data.split("");
  let value: number = 0;

  for (let i = 0; i < arrData.length; i++) {
    switch (arrData[i]) {
      case 'i': {
        value++;
        break;
      }
      case 'd': {
        value--;
        break;
      }
      case 's': {
        value = value ** 2;
        break;
      }
      case 'o': {
        result.push(value);
        break;
      }
      default: {
        break;
      }
    }
  }
  return result
}


// Multiplication table
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/train/typescript
export function multiplicationTable(size: number): number[][] {
  let result: number[][] = [];
  let i:number = 0;
  let j:number = 0;
  let x:number = 1;

  while(i < size){
    result.push([]);
    i++;
  }

  while(j < result.length){
    result[j].push((j+1)*x);
    if(result[j].length === size){
      j++;
      x = 1;
    } else {
      x++;
    }
  }

  return result;
}