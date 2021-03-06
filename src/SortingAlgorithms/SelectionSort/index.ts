// LEGACY VERSION (non ES2015 syntax)
export function selectionSort(arr: any[]){
  for(var i = 0; i < arr.length; i++){
      var lowest = i;
      for(var j = i+1; j < arr.length; j++){
          if(arr[j] < arr[lowest]){
              lowest = j;
          }
      }
      if(i !== lowest){
          //SWAP!
          var temp = arr[i];
          arr[i] = arr[lowest];
          arr[lowest] = temp;
      }
  }
  return arr;
}

// ES2015 VERSION
export function selectionSortES2015Version(arr: any[]) {
const swap = (arr: any, idx1: any, idx2: any) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

for (let i = 0; i < arr.length; i++) {
  let lowest = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[lowest] > arr[j]) {
      lowest = j;
    }
  }
  if (i !== lowest) swap(arr, i, lowest);
}

return arr;
}

selectionSort([0,2,34,22,10,19,17]);
