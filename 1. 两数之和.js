// function twoSum(nums, target) {
//     let result = [];
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             const sum = nums[i] + nums[j];
//             if (sum === target) {
//                 result = [i, j];
//             }
//         }
//     }
//     return result;
// };

function twoSum(nums, target) {
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {

        const diffNumber = target - nums[i];
        if (hashMap[diffNumber] !== undefined) {
            return [i, hashMap[diffNumber]];
        } else {
            hashMap[nums[i]] = i;
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [1, 0]
console.log(twoSum([3, 2, 4], 6)); // [2, 1]
console.log(twoSum([3, 3], 6)); // [1, 0]
console.log(twoSum([1, 2, 3, 4, 5], 9)); // [4, 3]
console.log(twoSum([1, 2, 3, 4, 5], 10)); // undefined
console.log(twoSum([1, 2, 3, 4, 5], 11)); // undefined
