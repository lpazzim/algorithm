// Recusion

export function countDown(num: number){
  if(num <= 0) {
      console.log("All done!");
      return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3)

// Iterative Version
export function countDownIterative(num: number){
  for(var i = num; i > 0; i--){
      console.log(i);
  }
  console.log("All done!")
}

