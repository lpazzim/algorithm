

// Count the Digit
export function nbDig(n: number, d: number): number {
  //n = number and d digit 
  // create a obj to count
  let obj: any = {}

  // square all number 0 <= k <= n and add in "obj"
  for (let i = 0; i <= n; i++){
    if(i <= 9){
      const aux = i ** 2;
       obj[aux] = (obj[aux] || 0) + 1;        
    } else{
      obj[i] = (obj[i] || 0) + 1;   
   }
  }

  let val: any;
  for(val in obj){
    
  }

  return obj
}    