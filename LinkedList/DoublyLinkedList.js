class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
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
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    newNode.previous = leader;
    follower.previous = newNode;

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
    const follower = unwantedNode.next;
    leader.next = follower;
    follower.previous = leader;
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
    node.previous = this.tail;

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
    this.head.previous = node;
    node.next = this.head;
    this.head = node;

    this.length++;
  }
}

const myLinkedList = new DoublyLinkedList(1);

myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(0);
myLinkedList.insert(2, 2);
myLinkedList.insert(20, 5);

console.log(myLinkedList.printList());
myLinkedList.removeAt(1);
console.log(myLinkedList.printList());
