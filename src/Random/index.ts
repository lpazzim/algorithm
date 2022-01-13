
// function getRandom(floor: number, ceiling: number) {
//   return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
// }


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
  let result:number = 0;

  arr.reduce((a, b) => {
   
    result = a + b;
    return a + b
  })

  return result;
}