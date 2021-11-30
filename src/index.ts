
import { counterString, same, validAnagram, validAnagramCourseExample } from './FrequencyCounterPattern'
import { nbDig } from './Codewars'
import { sumZero, uniqueValues } from './MultiplePointersPattern';



function getRandom(floor: number, ceiling: number) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}


export function sumPairs(ints: number[], s: number): [number, number] | void {
  let a, i,
    hash = Object.create(null);

  for (i = 0; i < ints.length; i++) {
    a = ints[i];
    if (hash[s - a]) {
      return [s - a, a];
    }
    if (!hash[a]) {
      hash[a] = true;
    }
  }
}


let l1: number[] = [1, 4, 8, 7, 3, 15]
let count: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(sumPairs(l1, 8));

function forCountUpTo(x: number) {
  for (let i = 0; i <= x; i++) {
    console.log('for', i);
  }
}

function foreachCountUpTo(arr: number[]) {
  arr.forEach((e) => {
    console.log('foreach', e);
  })
}

function whileCountUpTo(x: number) {
  let i: number = 0;
  while (i <= x) {
    console.log('while', i);
    i++;
  }
}

whileCountUpTo(10);
forCountUpTo(10);
foreachCountUpTo(count);






function jumpingNumber(n: number) {
  let res: any = true;
  if (n <= 9) {
    return 'Jumping!!';
  } else {
    var x = String(n).split("").map((num) => {
      return Number(num)
    })
    console.log(x);

    x.reduce(function (accum, curr) {
      if (accum - curr === 1 || curr - accum === 1) {
        if (res) {
          res = true;
        }
      } else {
        res = false
        return accum
      }
      accum = curr;
      return accum
    });

    if (res) {
      return 'Jumping!!';
    } else {
      return 'Not!!'
    }
  }
}


jumpingNumber(23643);




console.log('------------- FREQUENCY COUNTER PATTERN -------------')

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])

counterString(5000)

console.log(validAnagram('aaz', 'zaaa') ? 'true' : 'false');

console.log(validAnagramCourseExample('aaz', 'zaa') ? 'true' : 'false');

console.log('------------- END FREQUENCY COUNTER PATTERN -------------')


console.log('------------- MULTIPLE POINTERS PATTERN -------------')

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

console.log(uniqueValues([-2,-1,0, 1]));

console.log('------------- END MULTIPLE POINTERS PATTERN -------------')



// console.log('------------- CODEWARS -------------')

// console.log(nbDig(100, 0));

// console.log('------------- END CODEWARS -------------')