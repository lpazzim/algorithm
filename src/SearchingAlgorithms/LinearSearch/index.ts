/** 
 * Javascript has linear search!
 * Examples:
 *  - indexOf
 *  - includes
 *  - find
 *  - findIndex
 * */ 



export function linearSearch(arr: any, n:number){
  for (let i = 0; i < arr.length; i++){
      if(arr[i] === n){
          return i;
      }
  }
  
  return -1;
}