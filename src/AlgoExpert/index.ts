export function getNthFib(n: number) {
	// Write your code here.
	let result: number[] = [];
	let x: number = 0;
	let i: number = 0;


	function fibonacci(num: number, idx: number) {
		if (idx === n) return result

		if (result.length > 1) {
			x = result[i - 1] + result[i - 2];
			result.push(x);
		}

		if (result.length === 0) {
			result.push(0);
		} else if (result.length === 1) {
			result.push(1);
		}

		i++;

		fibonacci(x, i)

		return result
	}


	fibonacci(x, 0)



	return result[n - 1];
}




export function binarySearchAlgo(array: number[], target: number): number {
	// Write your code here.
	let start: number = 0;
	let end: number = array.length - 1;
	let middle: number = Math.floor((start + end) / 2);

	while (array[middle] !== target && start <= end) {
		if (target > array[middle]) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
		middle = Math.floor((start + end) / 2)
	}

	if (array[middle] === target) return middle;

	return -1;
}


function mergeAlgo(arr1: number[], arr2: number[]){
	let result : number[] = [];
	
	let i:number = 0;
	let j:number = 0;
	while(i < arr1.length && j < arr2.length){
		if(arr1[i] < arr2[j]){
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}	
	}
	
	while(i < arr1.length){
		result.push(arr1[i]);
			i++;
	}
	
	while(j < arr2.length){
			result.push(arr2[j]);
			j++;
	}
	
	return result
}

export function mergeSortAlgo(array: number[]) {
	if(array.length <= 1) return array;
	
	let middle: number = Math.floor(array.length / 2);
	let left: number[] = mergeSortAlgo(array.slice(0,middle))
	let right: number[] = mergeSortAlgo(array.slice(middle))

	
  return mergeAlgo(left, right);
}

