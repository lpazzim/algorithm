
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
      if (accum - curr === 1 || curr - accum  === 1) {
        if(res){
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

// Frequency counter pattern
function same(arr1: any, arr2: any){
  if(arr1.length !== arr2.length){
      return false;
  }
  let frequencyCounter1: any = {}
  let frequencyCounter2: any = {}
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  let key: any;
  
  for(key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false
      }
  }
  return true
}

same([1,2,3,2,5], [9,1,4,4,11])
