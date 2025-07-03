/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];

    const backtrack = (index, list) => {
        if (index === nums.length) {
            res.push(list.slice());
            return;
        }

        list.push(nums[index]); // Choose the current number
        backtrack(index + 1, list); // Explore with the current number included
        list.pop(); // Backtrack to explore without the current number
        backtrack(index + 1, list); // Explore without the current number
    };

    backtrack(0, []); // Start the backtracking process
    return res;
};

// Example usage:
console.log(subsets([1, 2, 3])); // Output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]