import { areThereDuplicatesSolution2 } from "../../Challenges";

// Merges two already sorted arrays
export function merge(arr1: number[], arr2: number[]) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
export function mergeSort(arr: number[]) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left: number[] = mergeSort(arr.slice(0, mid));
    let right: number[] = mergeSort(arr.slice(mid));
    return merge(left, right);
}


// MERGE SORT WITH STRING
export function mergeLetters(arr1: any[], arr2: any[]) {
    let result: any = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
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

    return result;
}


export function mergeSortLetters(str: string){
    let arr: any[] = str.replace(/,/g, '').split("");
    
    //Array sorted
    if (arr.length <= 1) return arr;

    let mid: number = Math.floor(arr.length / 2);
    let left: any[] = mergeSortLetters(arr.slice(0, mid).toString());
    let right: any[] = mergeSortLetters(arr.slice(mid).toString());
    console.log('mergeLetters', left, right)
    return mergeLetters(left, right);
}