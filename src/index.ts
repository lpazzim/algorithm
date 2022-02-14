
import { counterString, same, validAnagram, validAnagramCourseExample } from './ProblemSolvingPatterns/FrequencyCounterPattern'
import { add, adjacentElementsProduct, bouncingBall, calc, Challenge, Challenger, chooseBestSum, comp, compare, countSalutes, descendingOrder, digPow, duplicateCount, F, findOdd, findShort, findUniq, G964, getCount, incrementer, intDiff, isValidWalk, laser, likes, longest, M, meeting, multiplicationTable, nbDig, nbMonths, oper, order, orderWeight, parse, partsSums, rps, singleDigit, smallest, solution, solutionEndWith, sortSurname, splitAndMerge, sqInRect, sqInRectRecu, twoOldestAges } from './Codewars'
import { countUniqueValues, sumZero, uniqueValues } from './ProblemSolvingPatterns/MultiplePointersPattern';
import { maxSubarraySum } from './ProblemSolvingPatterns/SlidingWindowPattern';
import { search } from './ProblemSolvingPatterns/DivideAndConquerPattern';
import { collectOddValues, collectOddValuesPureRecursion, countDown, factorial, sumRange } from './Recursion';
import { areThereDuplicates, areThereDuplicatesSolution, areThereDuplicatesSolution2, averagePair, isValidSubsequence, neighborhood, sameFrequencyChallenge, twoNumberSum } from './Challenges';
import { linearSearch } from './SearchingAlgorithms/LinearSearch';
import { binarySearch, binarySearchLetters, binarySearchNew } from './SearchingAlgorithms/BinarySearch';
import { bubbleSort, bubbleSortES2015Version, bubbleSortES2015VersionNoSwaps, bubbleSortNoSwaps } from './SortingAlgorithms/BubbleSort';
import { selectionSort } from './SortingAlgorithms/SelectionSort';
import { insertionSort } from './SortingAlgorithms/InsertionSort';
import { merge, mergeLetters, mergeSort, mergeSortLetters } from './SortingAlgorithms/MergeSort';
import { quickSort } from './SortingAlgorithms/QuickSort';
import { binarySearchAlgo, findThreeLargestNumbers, getNthFib, mergeSortAlgo, minimumWaitingTime, nonConstructibleChange } from './AlgoExpert';
import { radixSort } from './SortingAlgorithms/RadixSort';
import { Point, Student } from './DataStructures/intro';
import { SinglyLinkedList } from './DataStructures/SinglyLinkedLists';
import { ArrayChalleng, binarySearch1701, countLettersNow, fib, MathChallenge, praticeReduce, slidingPratice, strChallenge } from './Random';
import { HasTable } from './DataStructures/HashTables';
import { Queue, Stack } from './DataStructures/Stacks&Queues';
import { DoublyLinkedList } from './DataStructures/DoublyLinkedLists';


//#region - FREQUENCY COUNTER PATTERN
console.log('------------- FREQUENCY COUNTER PATTERN -------------')

// same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])

// counterString(5000)

// console.log(validAnagram('aaz', 'zaaa') ? 'true' : 'false');

// console.log(validAnagramCourseExample('aaz', 'zaa') ? 'true' : 'false');

// console.log('------------- END FREQUENCY COUNTER PATTERN -------------')
//#endregion

//#region - MULTIPLE POINTERS PATTERN
console.log('------------- MULTIPLE POINTERS PATTERN -------------')

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

// console.log(uniqueValues([-2, -1, 0, 1]));
// console.log(countUniqueValues([-2, -1, 0, 1]));

console.log('------------- END MULTIPLE POINTERS PATTERN -------------')
//#endregion

//#region - SLINDING WINDOW PATTERN
console.log('------------- SLINDING WINDOW PATTERN -------------')

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 27], 3));

// console.log('------------- END SLINDING WINDOW PATTERN -------------')
//#endregion

//#region - DIVIDE AND CONQUER PATTERN
console.log('------------- DIVIDE AND CONQUER PATTERN -------------')

// console.log(search([1, 2, 3, 5, 7, 10, 15, 18, 25, 27], 3));

console.log('------------- END DIVIDE AND CONQUER PATTERN -------------')
//#endregion

console.log('******************************************** IMPORTANT ********************************************')

//#region - RECURSION
console.log('------------- RECURSION -------------')

// countDown(10);

// console.log(sumRange(3));

// console.log(factorial(5));

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// console.log(collectOddValuesPureRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9]));


console.log('------------- END RECURSION -------------')
//#endregion

console.log('******************************************** IMPORTANT ********************************************')

//#region - Challenges
console.log('------------- x Challenges x -------------')

// console.log(sameFrequencyChallenge(182, 821));
// console.log(sameFrequencyChallenge(13, 31));



// console.log('areThereDuplicates', areThereDuplicates([1, 2, 3]));
// console.log('areThereDuplicates', areThereDuplicates([1, 2, 2]));
// console.log('areThereDuplicates', areThereDuplicates(['a', 'b', 'c', 'a']));


// console.log('areThereDuplicates', areThereDuplicatesSolution2(1, 2, 3));
// console.log('areThereDuplicates', areThereDuplicatesSolution2(1, 2, 2));
// console.log('areThereDuplicates', areThereDuplicatesSolution2('a', 'b', 'c', 'a'));

// console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
// console.log(averagePair([], 4));


// console.log('neighborhood', neighborhood([1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0], 2));


// console.log(mergeSortNow([3,2,1,7,100,3, 4, 2, 5, 9, 87]));



// console.log(praticeReduce())
//  console.log(slidingPratice([0, 1, 2, 27, 3, 0, 2], 3));

// console.log(strChallenge('99946'));

// console.log(ArrayChalleng([10,22,9,33,21,50,41, 60,22,68,90]))

// console.log(MathChallenge(8))

// console.log(counterString('Challenge')) 

// console.log(countLettersNow('Challenge'));

// console.log(fib(3))



console.log('------------- x Challenges x -------------')
//#endregion

//#region - CODEWARS
console.log('------------- CODEWARS -------------')

// console.log(nbDig(10, 1));

// console.log(singleDigit(1234444123));

// console.log(add(2, 11));

// console.log(F(0));
// console.log(M(0));

// console.log(F(1));
// console.log(M(1));

// console.log(F(2));
// console.log(M(2));

// console.log('digPow', digPow(695, 2));

// console.log('isValidWalk ?', isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));

// console.log('bouncingBall', bouncingBall(3.0, 0.66, 1.5));
// console.log('bouncingBall', bouncingBall(30.0, 0.66, 1.5));
// console.log('bouncingBall', bouncingBall(30, 0.75, 1.5));
// console.log('bouncingBall', bouncingBall(30, 0.4, 10));

// console.log(smallest(209917));
// console.log(nbMonths(2000, 8000, 1000, 1.5))
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]));
// // console.log(addNow(1)(2));

// console.log(laser(() => ' volts!', 'Lucas' ))

// console.log(oper(() => ' volts!', 'Lucas' ));

// console.log(splitAndMerge("hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"));

// console.log('adjacentElementsProduct', adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]));

// console.log('findOdd', findOdd([1,1,1,1,1,1,10,1,1,1,1]));
// console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));


// console.log(partsSums([0, 1, 3, 6, 10]));

// console.log(chooseBestSum(163, 3, [50, 55, 57, 58, 60]))

// console.log(sqInRectRecu(5, 3));

// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

// console.log(isValidSubsequence( [5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 25, 6, -1, 8, 10]));

// console.log(parse("iiisdoso"));


// console.log(multiplicationTable(3));

// console.log(5 % 5);

// let x = new Challenge();

// console.log(x.solution(10));

// let prime = new G964;

// prime.primeFactors(933555431);

// console.log(prime.primeFactors(933555431));

// console.log(orderWeight('103 123 4444 99 2000'));

// console.log(findShort('turns out random test cases are easier than writing out basic ones'));

// console.log(compare("zz1", "" ));

// console.log(solution([1, 2, 10, 50, 5]));


// console.log(solutionEndWith('abc', ''));

// console.log(incrementer([4, 6, 7, 1, 3]));

// console.log(rps('rock', 'paper'));

// console.log(longest("aretheyhere", "yestheyarehere"));

// console.log(calc('ABC'));


// console.log(intDiff([ 1, 6, 2, 3, 7, 8, 7 ], 0));

// console.log(twoOldestAges([1, 5, 87, 45, 8, 8]))

// console.log(descendingOrder(123456789))

// console.log(duplicateCount('Indivisibilities'));

// console.log(likes(['Alex', 'Jacob']));

// console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"))


// let chall = new Challenger();

// console.log(chall.getMiddle('middle'));

// getCount('Lucas');

// console.log(countSalutes('>>>>>>>>>>>>>>>>>>>>>----<->'));


console.log('------------- END CODEWARS -------------')
//#endregion

//#region - SEARCH ALGORITHMS
console.log('------------- Search -------------')

// console.log(linearSearch([10, 15, 20, 25, 30], 15));
// console.log(binarySearch([1, 2, 3, 4, 5], 5));
// console.log('binarySearchLetters', binarySearchLetters('abcdefghijklmnopqrstuvxz', 'l'));
// console.log(binarySearchNew([1,2,3,4,5], 7))

// console.log(binarySearch1701([1, 2, 5, 7, 9, 15, 17, 25, 28, 2000], 5));

// console.log(search([0, 1 , 2, 7], 7))


console.log('------------- END Search -------------')
//#endregion

console.log('******************************************** IMPORTANT ********************************************')

//#region - SORT ALGORITHMS
console.log('------------- SORT ALGORITHMS -------------')

// console.log('BUBBLE SORT:');

// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

// console.log(bubbleSortES2015Version([8, 1, 2, 3, 4, 5, 6, 7]));

// console.log('Sorting with no swaps');


// console.log(bubbleSortNoSwaps([8, 1, 2, 3, 4, 5, 6, 7]));
// console.log(bubbleSortES2015VersionNoSwaps([8, 1, 2, 3, 4, 5, 6, 7]));

// console.log('SELECTION SORT:');

// console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]));


// console.log('INSERTION SORT:');

// console.log(insertionSort([2, 1, 9, 76, 4]));

// console.log('MERGE SORT:');

// console.log(merge([1, 5, 7, 15], [2,3, 4, 6, 14]));

// console.log(mergeSort([-1, 50,10,24,76,73, 87, 1, 95, 2, 3, 3, 0]));

// console.log(mergeLetters(['b', 'e', 'f'], ['a', 'c', 'd']));

// console.log('mergeSortLetters', mergeSortLetters('dcab'));

// console.log('Quick Sort', quickSort([100,-3,2,4,6,9,1,2,5,3,23]))

// console.log('radixSort', radixSort([23,567,89,12234324,90]));

console.log('------------- END SORT ALGORITHMS -------------')
//#endregion

console.log('******************************************** IMPORTANT ********************************************')

//#region - ALGOEXPERT
console.log('------------- ALGOEXPERT -------------')
// console.log(getNthFib(2))

// console.log('retornou isso:', binarySearchAlgo([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));


// console.log(mergeSortAlgo([8, 5, 2, 9, 5, 6, 3]));

// console.log(minimumWaitingTime([3, 2, 1, 2, 6]));

// console.log(nonConstructibleChange( [5, 7, 1, 1, 2, 3, 22]));

// console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));

console.log('------------- END ALGOEXPERT -------------')
//#endregion

//#region - DATA STRUCTURES INTRODUCTION

console.log('------------- DATA STRUCTURES INTRODUCTION -------------')

// let student1 = new Student('Lucas','Pazzim');

// console.log(student1.fullName());
// console.log(student1.markLate());
// console.log(student1.markLate());
// console.log(student1.markLate());
// student1.addScore(0);
// student1.addScore(100);
// console.log(student1);
// console.log(student1.calculateAverage());

// console.log(Student.enrollStudents());


// const p1 = new Point(5,5);
// const p2 = new Point(10,10);

// console.log(Point.distance(p1, p2));


console.log('------------- END DATA STRUCTURES INTRODUCTION -------------')
//#endregion

//#region - DATA STRUCTURES
console.log('------------- DATA STRUCTURES -------------')

//#region - SINGLY LINKED LIST
// let linkedList = new SinglyLinkedList();

// linkedList.push('HEY');
// linkedList.push('HOW');
// linkedList.push('ARE');
// linkedList.push('YOU!!!');

// linkedList.reverse();

// console.log(linkedList);
//#endregion



// #region - DOUBLY LINKED LIST
// let linkedList = new DoublyLinkedList();

// linkedList.push('HEY');
// linkedList.push('HOW');
// linkedList.push('ARE');
// linkedList.push('YOU!!!');

// // linkedList.pop();

// linkedList.shift();

// console.log(linkedList);
// #endregion


//#region - HASH TABLE

// let ht = new HasTable(17);
// ht.set("maroon","#800000")
// ht.set("yellow","#FFFF00")
// ht.set("olive","#808000")
// ht.set("salmon","#FA8072")
// ht.set("lightcoral","#F08080")
// ht.set("mediumvioletred","#C71585")
// ht.set("plum","#DDA0DD")

// console.log(ht.get('maroon'));

// console.log(ht.keys())



//#endregion

//#region - STACKs

// let stack = new Stack();

// stack.push('Lucas');
// stack.push('Alves');
// stack.push('Pazzim');

// stack.pop();


// console.log(stack);

//#endregion

//#region - Queue

// let stack = new Queue();

// stack.enqueue('Lucas');
// stack.enqueue('Alves');
// stack.enqueue('Pazzim');

// stack.dequeue();

// console.log(stack);

//#endregion

console.log('------------- END DATA STRUCTURES -------------')
//#endregion