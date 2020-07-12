/**
 * **Requirement**: Sort Array/List
 *
 * Time Complexity: log(N)
 *
 * @param {number[]} arr
 * @param {number} target
 */
function binarySearch(arr, target) {
  const N = arr.length;
  let high = N - 1;
  let low = 0;

  while (high >= low) {
    const mid = Math.floor((high + low) / 2);

    if (arr[mid] === target) return mid;

    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
}

function main() {
  console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
}

// @ts-ignore
if (require.main === module) {
  main();
}

module.exports = {
  binarySearch,
};
