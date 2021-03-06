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


function mergeAlgo(arr1: number[], arr2: number[]) {
	let result: number[] = [];

	let i: number = 0;
	let j: number = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			result.push(arr1[i]);
			i++;
		} else {
			result.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		result.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		result.push(arr2[j]);
		j++;
	}

	return result
}

export function mergeSortAlgo(array: number[]) {
	if (array.length <= 1) return array;

	let middle: number = Math.floor(array.length / 2);
	let left: number[] = mergeSortAlgo(array.slice(0, middle))
	let right: number[] = mergeSortAlgo(array.slice(middle))


	return mergeAlgo(left, right);
}

export function minimumWaitingTime(queries: number[]) {
	let result: number = 0;
	let current: number = 0;
	let arrSorted: number[] = queries.sort((a, b) => { return a - b })

	if (queries.length <= 1) return 0

	for (let i = 0; i < arrSorted.length; i++) {
		if (i === 0) {
			current = 0;
		} else {
			current += arrSorted[i - 1];
		}
		result = result + current;
	}

	return result;
}


//non-Constructible Change
export function nonConstructibleChange(coins: number[]) {
	coins.sort((a, b) => a - b);

	let currentChangeCreated = 0;
	for (const coin of coins) {
		if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
	}

	return currentChangeCreated + 1;
}



export function findThreeLargestNumbers(arr: number[]) {

	let result: number[] = [];

	function threeLargest(arrAux: number[]) {
		let temp = 0;
		let tempIdx = 0;
		if (result.length === 3 || arrAux.length <= 0) return result
		for (let i = 0; i < arrAux.length; i++) {
			if (!temp) {
				temp = arrAux[i];
			}

			if (arrAux[i] > temp) {
				temp = arrAux[i];
				tempIdx = i
			}
		}

		result.push(temp);
		arrAux.splice(tempIdx, 1)

		threeLargest(arrAux);
		return result
	}

	threeLargest(arr);

	return result.sort((a, b) => a - b);
}


// Class Photos

export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
	let i: number = 0;
	let j: number = 0;
	let res: boolean = false;
	let tallerRed: number = redShirtHeights.sort()[redShirtHeights.length - 1];
	let tallerBlue: number = redShirtHeights.sort()[blueShirtHeights.length - 1];

	if (tallerBlue < tallerRed) {
		while (i < redShirtHeights.length && j < blueShirtHeights.length) {
			if (redShirtHeights[i] < blueShirtHeights[j]) {
				res = true;
			} else {
				res = false;
				break;
			}

			i++;
			j++;
		}
	}

	if (tallerRed < tallerBlue) {
		i = 0;
		j = 0;
		while (i < redShirtHeights.length && j < blueShirtHeights.length) {
			if (blueShirtHeights[i] < redShirtHeights[j]) {
				res = true;
			} else {
				res = false;
				break;
			}
			i++;
			j++;
		}
	}


	return res;
}



// This is an input class. Do not edit.
export class LinkedListAlgo {
	value: number;
	next: LinkedListAlgo | null;

	constructor(value: number) {
		this.value = value;
		this.next = null;
	}

	removeDuplicates() {
		let current = null;
		let currentNext = null;
		let dup = null;
		current = this;

		while (current !== null && current.next !== null) {
			currentNext = current;
			while (currentNext.next !== null) {
				if (current.value === currentNext.next.value) {
					dup = currentNext.next;
					currentNext.next = currentNext.next.next;
				} else {
					currentNext = currentNext.next;
				}
			}
			current = current.next;
		}
		return
	}
}

export function removeDuplicatesFromLinkedList(linkedList: LinkedListAlgo) {
	let current = linkedList;
	current.removeDuplicates();
	return linkedList;
}