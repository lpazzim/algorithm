
class NodeClass {
  val: any;
  priority: number;
  constructor(val: any, priority: number) {
    this.val = val
    this.priority = priority;
  }
}


export class PriorityQueue {
  values: any[] = []
  constructor() {
    this.values = [];
  }

  enqueue(val: any, priority:number) {
    let newNode = new NodeClass(val, priority)
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      //Formula to find the parent element index "Math.floor((idx - 1) / 2)";
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority <= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length: number = this.values.length;
    const element: any = this.values[0];

    while (true) {
      let leftChildIdx: number = 2 * idx + 1;
      let rightChildIdx: number = 2 * idx + 2;
      let leftChild: any;
      let rightChild: any;
      let swap: any = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (rightChild > element) {
          if ((swap === null && rightChild.priority > element.priority) ||
            (swap !== null && rightChild.priority > leftChild.priority)) {
            swap = rightChildIdx;
          }
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}