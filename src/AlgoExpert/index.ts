export function getNthFib(n: number) {
  // Write your code here.
	let result: number[] = [];
	let x: number = 0;
	let i: number = 0;
	
	
	function fibonacci(num: number, idx:number){
		if(idx === n) return result
		
		if(result.length > 1){
			x =  result[i-1] + result[i-2];
			result.push(x);	
		} 
		
		if(result.length === 0){
			result.push(0);
		} else if(result.length === 1) {
			result.push(1);
		}

		i++;

		fibonacci(x , i)
		
		return result
	}
	
	
	fibonacci(x,0)
	
	
	
  return result[n-1];
}