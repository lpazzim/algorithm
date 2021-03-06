
export class classNode {
    value?: any;
    next?: any;
    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

// STACKS
//Stacks are a LIFO data structure

export class Stack {
    first?: any;
    last?: any;
    size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val: any) {
        var newNode = new classNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

// QUEUES
// Queues are a FIFO data structure


export class Queue {
    first?: any;
    last?: any;
    size: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val: any) {
        var newNode = new classNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;
        let temp = this.first;

        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}