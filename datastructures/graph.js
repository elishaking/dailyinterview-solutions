class TreeNode {
  /**
   * @param {any} value
   * @param {TreeNode} left
   * @param {TreeNode} right
   */
  constructor(value, left = null, right = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class BinarySearchTree {
  /**
   * @param {TreeNode} root
   */
  constructor(root = null) {
    this.root = root;
  }

  /**
   * @param {TreeNode} node
   */
  insert(node) {
    if (node instanceof Number) node = new TreeNode(node);

    let currentNode = this.root;
    if (currentNode === null) {
      this.root = node;
      return this;
    }

    while (true) {
      if (node.value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = node;
          return this;
        }

        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = node;
          return this;
        }

        currentNode = currentNode.left;
      }
    }
  }
}
