class NodeClass {
  val: any
  next: any
  constructor(val: any) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  head: any
  tail: any
  length: any
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: any) {
    var newNode = new NodeClass(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //  traverse(){
  //    let current = this.head;
  //    while(current){
  //      console.log(current.val);
  //      current = current.next;
  //    }
  //  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val: any) {
    var newNode = new NodeClass(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    let counter: number = 0;
    let current: any = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index: number, val: any) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.next = val;
      return true;
    } else {
      return false;
    }
  }
  insert(index: number, val: any) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    var newNode = new NodeClass(val);
    let prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
//***** Important *****/
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next: any;
    let prev: any = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

}