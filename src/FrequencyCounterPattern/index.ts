



// Frequency counter pattern
export function same(arr1: any, arr2: any){
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



// Frequency counter pattern study
export function counterString(str: string){
  let strArr = str.split('');
  let objLetters: any = {};
  for(let val of strArr){
    objLetters[val] = (objLetters[val] || 0) + 1
  }
  console.log(objLetters);
}
