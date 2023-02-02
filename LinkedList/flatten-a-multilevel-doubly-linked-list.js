// //https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/submissions/889714565/

//  * // Definition for a Node.
// * function Node(val,prev,next,child) {
//         this.val = val;
//         this.prev = prev;
//         this.next = next;
//         this.child = child;
// };

// Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Output: [1,2,3,7,8,11,12,9,10,4,5,6]

// solution #1(iterative)
// space and time -> O(n)
var flattenGood = function (head) {
  let current = head;
  const nextStack = [];

  while (current) {
    if (current.child) {
      const next = current.next;
      const child = current.child;

      nextStack.push(next);
      current.child = null;
      current.next = child;
      child.prev = current;
    } else {
      if (!current.next && nextStack.length) {
        const nextOne = nextStack.pop();
        if (nextOne) {
          current.next = nextOne;
          nextOne.prev = current;
        }
      } else {
        current = current.next;
      }
    }
  }

  return head;
};

// solution #2(iterative)
// space O(1)
// time O(2n) -> O(n) when we drop the constant

var flattenWorse = function (head) {
  const current = head;
  const start = null;
  const end = null;
  const tail = null;

  while (current) {
    if (current.child) {
      start = current;
      end = current.next;
      tail = current.child;
      tail.prev = start;
      start.next = start.child;
      start.child = null;

      while (tail.next) {
        tail = tail.next;
      }

      if (end) {
        tail.next = end;
        end.prev = tail;
      }
    }
    current = current.next;
  }
  return head;
};
