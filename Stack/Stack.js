class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Linked List Stack implementation
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.buttom = null;
    }

    const holdingPointer = this.top;

    this.top = this.top.next;
    this.length--;

    return holdingPointer;
  }
}

const stack = new Stack();
stack.push('google');
stack.push('udemy');
stack.push('discord');
stack.pop();

console.log(stack.peek());
