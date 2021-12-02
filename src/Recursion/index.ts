// Recusion
export function countDown(num: number) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3)

// Recusrive function example:
export function sumRange(num: number):number {
  if (num === 1) return 1;
  return num + sumRange(num - 1)
}

// Recusrive function example 2:
export function factorial(num: number):number {
  if (num === 1) return 1;
  return num * factorial(num - 1)
}




// Helper method recursion

export function collectOddValues(arr: number[]){
    
  let result: number[] = [];

  function helper(helperInput: number[]){
      if(helperInput.length === 0) {
          return;
      }
      
      if(helperInput[0] % 2 !== 0){
          result.push(helperInput[0])
      }
      
      helper(helperInput.slice(1))
  }
  
  helper(arr)

  return result;
}


// Pure Recursion
export function collectOddValuesPureRecursion(arr: number[]){
  let newArr: number[] = [];
  
  if(arr.length === 0) {
      return newArr;
  }
      
  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }
      
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

                                      
                                                              
                                                                           
                          
          