// https://leetcode.com/problems/validate-binary-search-tree/

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new treeNode(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (newNode.val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      }
    }
  }
}

class treeNode {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(1);
tree.insert(4);
tree.insert(null);
tree.insert(null);
tree.insert(3);
tree.insert(6);

const isValidBST = function (root) {
  let list = [];
  let isValid = true;

  let inOrder = (node) => {
    if (!isValid || !node) {
      return;
    }

    if (node.left) {
      inOrder(node.left);
    }
    if (list.length && list[list.length - 1] >= node.val) {
      isValid = false;
      return;
    }
    list.push(node.val);
    if (node.right) {
      inOrder(node.right);
    }
  };

  inOrder(root);
  return isValid;
};

console.log(isValidBST(tree.root));
