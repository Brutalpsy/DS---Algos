// https://leetcode.com/problems/linked-list-cycle-ii/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// O(n) time
// O(n) space
var detectCycle1 = function (head) {
  let current = head;
  const seen = new Set();

  while (current && !seen.has(current)) {
    if (!current.next) {
      return null;
    }
    seen.add(current);
    current = current.next;
  }

  return current;
};

// Floyd's Tortoise and Hare algorithm  #1
// O(n) time
// O(1) space
var detectCycle2 = function (head) {
  let hare = head;
  let turquoise = head;

  while (true) {
    hare = hare && hare.next;
    turquoise = turquoise?.next;

    if (!hare || !hare.next) {
      return null;
    } else {
      hare = hare?.next;
    }
    if (hare === turquoise) {
      break;
    }
  }

  let p1 = head;
  let p2 = hare;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
};

// Floyd's Tortoise and Hare algorithm  #2 - another way
// O(n) time
// O(1) space

var detectCycle1 = function (head) {
  let hare = head;
  let turquoise = head;
  let p1 = head;
  let p2 = null;

  while (hare) {
    hare = hare?.next?.next;
    turquoise = turquoise?.next;

    if (hare === turquoise) {
      p2 = turquoise;
      while (p1 != p2) {
        p1 = p1.next;
        p2 = p2.next;
      }
      return p1;
    }
  }
  return null;
};
