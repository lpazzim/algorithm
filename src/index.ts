
function getRandom(floor:number, ceiling:number) {
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

console.log(sumPairs(l1, 8));