export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  removeAt(index) {
    //check params

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }

  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;

    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;

    // let current = this.head;
    // while (current.next) {
    //   current = current.next;
    // }
    // current.next = new Node(value);
    // this.length++;
  }
  prepend(value) {
    var node = new Node(value);
    node.next = this.head;
    this.head = node;

    this.length++;
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    this.tail = this.head;

    let previous = null;
    let current = this.head;

    while (current != null) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.head = previous;
  }
}

const myLinkedList = new LinkedList(2);

myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.insert(2, 3);
myLinkedList.insert(20, 6);

console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
