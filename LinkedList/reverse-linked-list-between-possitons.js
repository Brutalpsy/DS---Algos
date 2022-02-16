// https://leetcode.com/problems/reverse-linked-list-ii/

import { LinkedList, Node } from './LinkedList.js';

const myLinkedList = new LinkedList(2);

const reverseBetween = (head, left, right) => {
  let currentNode = head;
  let start = head;
  let counter = 1;

  while (counter < left) {
    start = currentNode;
    currentNode = currentNode.next;
    counter++;
  }
  let tail = currentNode;
  let newList = null;
  while (counter >= left && counter <= right) {
    let next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    counter++;
  }

  start.next = newList;
  tail.next = currentNode;

  if (left > 1) {
    return head;
  } else {
    return newList;
  }
};

myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.insert(2, 3);
myLinkedList.insert(20, 6);

console.log(reverseBetween(myLinkedList.head, 2, 4));
