const { BinarySearchTree, TreeNode } = require("./datastructures/graph");
const { binarySearch } = require("./algorithms/search");

/**
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * @param {string} s
 */
function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let currentLength = 0;
  let store = {};

  for (let i = 0; i < s.length; i++) {
    const key = s[i];
    if (store[key]) {
      if (currentLength > maxLength) maxLength = currentLength;
      currentLength = 0;
      store = {};
    } else {
      store[key] = true;
      currentLength++;
    }
  }

  if (currentLength > maxLength) maxLength = currentLength;

  return maxLength;
}

// console.log(lengthOfLongestSubstring("abrkaabcdefghijjxxx"));

/**
 * Imagine you are building a compiler. Before running any code, the compiler must check that the parentheses in the program are balanced.
 * Every opening bracket must have a corresponding closing bracket. We can approximate this using strings.
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * - Open brackets are closed by the same type of brackets.
 * - Open brackets are closed in the correct order.
 * - Note that an empty string is also considered valid.
 *
 * @param {string} s
 */
function isValid(s) {
  const open = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const close = {
    ")": ")",
    "]": "]",
    "}": "}",
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const key = s[i];
    if (open[key]) stack.push(key);
    else if (close[key]) {
      const openKey = stack.pop();
      if (open[openKey] !== close[key]) return false;
    }
  }

  return stack.length === 0;
}

// console.log(isValid("((()))"));
// console.log(isValid("[()]{}"));
// console.log(isValid("({[)]"));
// console.log(isValid("()(){(())"));
// console.log(isValid("([{}])()"));

/**
 * This problem was recently asked by AirBNB:
 *
 * Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x. Return -1 if
 * the target is not found.
 *
 * @param {number[]} arr
 * @param {number} target
 */
function getRange(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      let start = 0;
      let end = 0;

      for (let i = mid; arr[i] === target; i--) {
        start = i;
      }

      for (let i = mid; arr[i] === target; i++) {
        end = i;
      }

      return [start, end];
    }

    if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return [-1, -1];
}

// console.log(getRange([1, 2, 2, 2, 2, 3, 4, 7, 8, 8], 2));
// console.log(getRange([1, 2, 3, 4, 5, 6, 10], 9));
// console.log(getRange([1, 3, 3, 5, 7, 8, 9, 9, 9, 15], 9));
// console.log(getRange([100, 150, 150, 153], 150));

class ListNode {
  /**
   * ListNode
   * @param {number} val
   */
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * This problem was recently asked by Google:
 * Given a singly-linked list, reverse the list iteratively
 *
 * @param {ListNode} head
 */
function reverseIteratively(head) {
  let prevNode = head;
  let currentNode = prevNode.next;
  prevNode.next = null;
  while (currentNode) {
    let temp = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = temp;
  }

  return prevNode;
}

// const list = new ListNode(10);
// list.next = new ListNode(20);
// list.next.next = new ListNode(30);
// console.log(list);
// console.log(reverseIteratively(list));

/**
 * This problem was recently asked by Google:
 * Given a singly-linked list, reverse the recursively
 *
 * @param {ListNode} head
 */
function reversRecursively(head) {
  /**
   * @param {ListNode} currentNode
   * @param {ListNode} prevNode
   */
  const reverse = (currentNode, prevNode) => {
    if (currentNode === null) return prevNode;

    let temp = currentNode.next;
    currentNode.next = prevNode;
    return reverse(temp, currentNode);
  };

  return reverse(head.next, head);
}

// const list = new ListNode(10);
// list.next = new ListNode(20);
// list.next.next = new ListNode(30);
// console.log(list);
// console.log(reversRecursively(list));

/**
 * You are given a list of numbers, and a target number k. Return whether or not
 * there are two numbers in the list that add up to k.
 *
 * @param {number[]} arr
 * @param {number} target
 */
function twoSum(arr, target) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (obj[target - num]) return true;
  }

  return false;
}

// console.log(twoSum([4, 7, 1, -3, 2], 5));

/**
 * You are given an array of integers in an arbitrary order. Return whether or
 * not it is possible to make the array non-decreasing by modifying at most 1 element to any value.
 *
 * @param {number[]} arr
 */
function check(arr) {
  let modified = false;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] < 0) {
      if (modified) return false;
      modified = true;
    }
  }
  return true;
}

// console.log(check([13, 4, 7]));
// console.log(check([5, 1, 3, 2, 5]));

/**
 * Given an integer k and a binary search tree, find the floor (less than or equal to) of k,
 * and the ceiling (larger than or equal to) of k. If either does not exist, then print them as None.
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 * @param {TreeNode} rootNode
 * @param {number} k
 */
function floorAndCeilOfBST(rootNode, k) {
  const treeValues = new BinarySearchTree(rootNode).inOrderTraversal();
  const idx = binarySearch(treeValues, k);

  if (idx === -1 || idx === 0 || idx === treeValues.length - 1) return null;

  return [treeValues[idx - 1], treeValues[idx + 1]];
}

const bst = new BinarySearchTree()
  .insert(10)
  .insert(20)
  .insert(5)
  .insert(6)
  .insert(7);

// console.log(floorAndCeilOfBST(bst.root, 6));

/**
 *
 * @param {TreeNode} rootNode
 */
function invertBinaryTree(rootNode) {
  if (rootNode === null) return;

  let temp = rootNode.left;
  rootNode.left = rootNode.right;
  rootNode.right = temp;

  invertBinaryTree(rootNode.left);
  invertBinaryTree(rootNode.right);
}

console.log(bst.preOrderTraversal());
invertBinaryTree(bst.root);
console.log(bst.preOrderTraversal());
