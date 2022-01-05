export function hash(key: string, arrayLen: number) {
  let total: number = 0;
  for (let char of key) {
    let value: number = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}