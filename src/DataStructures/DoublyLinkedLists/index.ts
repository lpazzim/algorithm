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
}