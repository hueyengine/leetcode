/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];

    const backtrack = (start, temp, sum) => {
        if (sum >= target) {
            if (sum === target) {
                res.push(temp.slice()); // Found a valid combination
                return;
            }
            return; // Exceeded the target, no need to continue
        }

        for (let i = start; i < candidates.length; i++) {
            temp.push(candidates[i]); // Choose the current candidate
            backtrack(i, temp, sum + candidates[i]); // Explore further with the current candidate included
            temp.pop(); // Backtrack to explore without the current candidate
        }
    };

    backtrack(0, [], 0); // Start the backtracking process with an empty combination and sum of 0
    return res;
};

// Example usage:
console.log(combinationSum([2, 3, 6, 7], 7)); // Output: [[2, 2, 3], [7]]