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
   * @param {TreeNode | number} node
   */
  insert(node) {
    if (typeof node === "number") node = new TreeNode(node);

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

  inOrderTraversal() {
    const values = [];

    /**
     * @param {TreeNode} node
     */
    const traverse = (node) => {
      if (node === null) return;

      traverse(node.left);
      values.push(node.value);
      traverse(node.right);
    };

    traverse(this.root);

    return values;
  }
}

function main() {
  const bst = new BinarySearchTree();
  bst.insert(10).insert(20).insert(5).insert(6).insert(7);

  console.log(bst.inOrderTraversal());
}

// @ts-ignore
if (require.main === module) {
  main();
}

module.exports = {
  TreeNode,
  BinarySearchTree,
};
