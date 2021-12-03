

// Count the Digit
export function nbDig(n: number, d: number): number {
  //n = number and d digit 
  // create a obj to count
  let obj: any = {}

  // square all number 0 <= k <= n and add in "obj"
  for (let i = 0; i <= n; i++) {
    if (i <= n) {
      const aux = i ** 2;
      obj[aux] = (obj[aux] || 0) + 1;
    } else {
      obj[i] = (obj[i] || 0) + 1;
    }
  }

  let val: any;
  let result: any = {};

  for (val in obj) {
    let arr = val.split('');
    arr = arr.sort(function (a: any, b: any) { return a - b; });
    function countdig(list: any[]) {
      if (!list.find(e => e === d.toString()) || list.length === 0) return;
      if(d.toString() === list[0]){
        result[d.toString()] = (result[d.toString()] || 0) + 1;
      }
      countdig(list.slice(1));
    }
  
    countdig(arr);
  }
  return result
}
