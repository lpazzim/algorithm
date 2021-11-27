// Frequency counter pattern
export function same(arr1: any, arr2: any) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1: any = {}
  let frequencyCounter2: any = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  let key: any;

  for (key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}



// Frequency counter pattern study
export function counterString(str: string) {
  let strArr = str.split('');
  let objLetters: any = {};
  for (let val of strArr) {
    objLetters[val] = (objLetters[val] || 0) + 1
  }
  console.log(objLetters);
}

// Frequency counter pattern:
// Valid Anagram Challenge
export function validAnagram(str1: string, str2: string) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');

  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1: any = {}
  let frequencyCounter2: any = {}

  for (let val of arr1) {
    frequencyCounter1[val.toLowerCase()] = (frequencyCounter1[val.toLowerCase()] || 0) + 1
  }

  for (let val of arr2) {
    frequencyCounter2[val.toLowerCase()] = (frequencyCounter2[val.toLowerCase()] || 0) + 1
  }

  let item: any;

  for (item in frequencyCounter1) {
    if (!(item in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[item] !== frequencyCounter1[item]) {
      return false
    }
  }
  return true

}



// Couse example of Valid Anagram
export function validAnagramCourseExample(first: string, second: string) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup: any = {};

  for (let i = 0; i < first.length; i++) {
    let letter: any = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
