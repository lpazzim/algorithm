class NodeClass {
  value: any
  left: any
  right: any
  constructor(val: any) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: any
  constructor() {
    this.root = null;
  }

  insert(val: any) {
    let newNode = new NodeClass(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val: any) {
    if (this.root === null) return false;
    let current: NodeClass = this.root;
    let found: boolean = false;

    while(current && !found){
      if(val < current.value){
        current = current.left;
      } else if(val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }

}