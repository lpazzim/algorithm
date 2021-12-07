
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

  if(size === 1) size++;

  if(converNum1.length === 1 && converNum2.length === 1){
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



export function F(n:number):number { 
  if(n === 0){
    return 1;
  }
  
  return n - M(F(n - 1));
  
}

export function M(n:number):number { 
 if(n === 0){
    return 0;
  }

  return n - F(M(n - 1));
}