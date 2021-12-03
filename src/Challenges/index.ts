export function sameFrequencyChallenge(num1: number, num2: number) {
  let obj1: any = {};
  let covertNum1 = num1.toString();
  let covertNum2 = num2.toString();


  for (let i = 0; i < covertNum1.length; i++) {
    let idx: string = covertNum1[i];
    obj1[idx] ? obj1[idx] += 1 : obj1[idx] = 1;
  }

  for (let i = 0; i < covertNum2.length; i++) {
    let idx2: string = covertNum2[i];

    if (!obj1[idx2]) {
      return false;
    } else {
      obj1[idx2] -=1;
    }

  }
  return true;
}
