
import { counterString, same, validAnagram, validAnagramCourseExample } from './FrequencyCounterPattern'
import { nbDig } from './Codewars'
import { countUniqueValues, sumZero, uniqueValues } from './MultiplePointersPattern';
import { maxSubarraySum } from './SlidingWindowPattern';


console.log('------------- FREQUENCY COUNTER PATTERN -------------')

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])

counterString(5000)

console.log(validAnagram('aaz', 'zaaa') ? 'true' : 'false');

console.log(validAnagramCourseExample('aaz', 'zaa') ? 'true' : 'false');

console.log('------------- END FREQUENCY COUNTER PATTERN -------------')


console.log('------------- MULTIPLE POINTERS PATTERN -------------')

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

console.log(uniqueValues([-2,-1,0, 1]));
console.log(countUniqueValues([-2,-1,0, 1]));

console.log('------------- END MULTIPLE POINTERS PATTERN -------------')





console.log('------------- SLINDING WINDOW PATTERN -------------')

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,27],3));


console.log('------------- END SLINDING WINDOW PATTERN -------------')


// console.log('------------- CODEWARS -------------')

// console.log(nbDig(100, 0));

// console.log('------------- END CODEWARS -------------')