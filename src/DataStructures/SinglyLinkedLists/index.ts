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
   traverse(){
     let current = this.head;
     while(current){
       console.log(current.val);
       current = current.next;
     }
   }
}