// https://leetcode.com/problems/implement-queue-using-stacks/description/

// You must use only standard operations of a stack, which means only push to top,
// peek/pop from top, size, and is empty operations are valid.

class CrazyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  enqueue(value) {
    while (this.popStack.length) {
      this.pushStack.push(this.popStack.pop());
    }
    return this.pushStack.push(value);
  }
  dequeue() {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
    return this.popStack.pop();
  }
  peek() {
    if (this.pushStack.length) {
      return this.pushStack[0];
    }
    return this.popStack[this.popStack.length - 1];
  }
}

const myQueue = new CrazyQueue();
myQueue.enqueue('Danijel');
myQueue.enqueue('Milica');
myQueue.enqueue('Bojana');
myQueue.enqueue('Mirsad');
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.enqueue('Nemanja');
console.log(myQueue.peek());
