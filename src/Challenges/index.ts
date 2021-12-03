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
  let val:any;

  for(val of arr){
    obj[val] = (obj[val] || 0) +1
  }

  let idx:any;
  
  for(idx in obj){
    if(obj[idx] > 1){
      return true
    }  
  }

  return false;
}




export function areThereDuplicatesSolution(...args:any) {
  let collection:any = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}


export function areThereDuplicatesSolution2(...args:any) {
  // Two pointers
  args.sort((a: any, b: any) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}