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
    if (!this.head) {
      this.head = new NodeClass(val);
      this.tail = new NodeClass(val);
    } else {
      this.tail = new NodeClass(val);
    }

  }
}