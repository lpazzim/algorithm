
// // Count the Digit
// export function nbDig(n: number, d: number): number {
//   //n = number and d digit 
//   // create a obj to count
//   let obj: any = {}

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





export function smallest(n: number): number[] {
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

      if(parseInt(arr[startIndex]) < parseInt(arr[swapIndex])){
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




// for(let j = 0; j < arr.length; j++){    
//   if (arr[j] > arr[j + 1]) {
//     startIndex = j;
//     var temp = arr[j];
//   }
  // arr[j] = arr[j + 1];
  // arr[j + 1] = temp;
  // swaps = true;