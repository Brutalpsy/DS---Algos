class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first == this.last) {
      this.last = null;
    }

    const deletedOne = this.first;
    this.first = this.first.next;
    this.length--;

    return deletedOne;
  }
}

var myQueue = new Queue();
myQueue.enqueue('Danijel');
myQueue.enqueue('Nemanja');
myQueue.enqueue('Snezana');
myQueue.enqueue('Aleksandar');
myQueue.dequeue();

console.log(myQueue.peek());
