
export class HasTable {
  keyMap: any[] = [];
  contructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key: string) {
    let total: number = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char: any = key[i];
      let value: number = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key: any, value: any) {
    let index: number = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
}