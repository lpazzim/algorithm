// Recusion

export function countDown(num: number) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3)

// Recusrive function example:
export function sumRange(num: number):number {
  if (num === 1) return 1;
  return num + sumRange(num - 1)
}

