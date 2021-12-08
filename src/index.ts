
import { counterString, same, validAnagram, validAnagramCourseExample } from './ProblemSolvingPatterns/FrequencyCounterPattern'
import { add, digPow, F, isValidWalk, M, nbDig, singleDigit } from './Codewars'
import { countUniqueValues, sumZero, uniqueValues } from './ProblemSolvingPatterns/MultiplePointersPattern';
import { maxSubarraySum } from './ProblemSolvingPatterns/SlidingWindowPattern';
import { search } from './ProblemSolvingPatterns/DivideAndConquerPattern';
import { collectOddValues, collectOddValuesPureRecursion, countDown, factorial, sumRange } from './Recursion';
import { areThereDuplicates, areThereDuplicatesSolution, areThereDuplicatesSolution2, averagePair, sameFrequencyChallenge } from './Challenges';
import { linearSearch } from './SearchingAlgorithms/LinearSearch';


console.log('------------- FREQUENCY COUNTER PATTERN -------------')

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])

counterString(5000)

console.log(validAnagram('aaz', 'zaaa') ? 'true' : 'false');

console.log(validAnagramCourseExample('aaz', 'zaa') ? 'true' : 'false');

console.log('------------- END FREQUENCY COUNTER PATTERN -------------')


console.log('------------- MULTIPLE POINTERS PATTERN -------------')

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

console.log(uniqueValues([-2, -1, 0, 1]));
console.log(countUniqueValues([-2, -1, 0, 1]));

console.log('------------- END MULTIPLE POINTERS PATTERN -------------')


console.log('------------- SLINDING WINDOW PATTERN -------------')

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 27], 3));

console.log('------------- END SLINDING WINDOW PATTERN -------------')


console.log('------------- DIVIDE AND CONQUER PATTERN -------------')

console.log(search([1, 2, 3, 5, 7, 10, 15, 18, 25, 27], 3));

console.log('------------- END DIVIDE AND CONQUER PATTERN -------------')

console.log('******************************************** IMPORTANT ********************************************')

console.log('------------- RECURSION -------------')

countDown(10);

console.log(sumRange(3));

console.log(factorial(5));

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log(collectOddValuesPureRecursion([1, 2, 3, 4, 5, 6, 7, 8, 9]));


console.log('------------- END RECURSION -------------')

console.log('******************************************** IMPORTANT ********************************************')



console.log('------------- x Challenges x -------------')

console.log(sameFrequencyChallenge(182, 821));
console.log(sameFrequencyChallenge(13, 31));



console.log('areThereDuplicates', areThereDuplicates([1, 2, 3]));
console.log('areThereDuplicates', areThereDuplicates([1, 2, 2]));
console.log('areThereDuplicates', areThereDuplicates(['a', 'b', 'c', 'a']));


console.log('areThereDuplicates', areThereDuplicatesSolution2(1, 2, 3));
console.log('areThereDuplicates', areThereDuplicatesSolution2(1, 2, 2));
console.log('areThereDuplicates', areThereDuplicatesSolution2('a', 'b', 'c', 'a'));

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));


console.log('------------- x Challenges x -------------')



console.log('------------- CODEWARS -------------')

console.log(nbDig(10, 1));

console.log(singleDigit(1234444123));

console.log(add(2, 11));

console.log(F(0));
console.log(M(0));

console.log(F(1));
console.log(M(1));

console.log(F(2));
console.log(M(2));



console.log('digPow', digPow(695, 2));

console.log('isValidWalk ?', isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));


console.log('------------- END CODEWARS -------------')



console.log('------------- Search -------------')

console.log(linearSearch([10, 15, 20, 25, 30], 15));

console.log('------------- END Search -------------')