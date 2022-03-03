class NodeClass {
  val: any
  next: any
  prev: any
  constructor(val: any) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
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
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val: any) {
    let newNode = new NodeClass(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx: number) {
    if (idx < 0 || idx >= this.length) return null;
    let count: number;
    let current: NodeClass;

    if (idx <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(idx: number, val: any) {
    let foundNode: any = this.get(idx);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(idx: number, val: any) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    let newNode: NodeClass = new NodeClass(val)
    let beforeNode: any = this.get(idx - 1);
    let afterNode: any = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    
    this.length++;
    return true;
  }

}