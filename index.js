function hasTargetSum(array, target) {
  const numbers_seen = new Set();

  for (const num of array) {
    const number_to_find = target - num;
    if (numbers_seen.has(number_to_find)) {
      return true;
    }
    numbers_seen.add(num);
  }

  return false;
}
/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
