/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (x in nums) {
        for (y in nums) {
            if (x != y) {
                if (nums[x] + nums[y] == target) {
                    return [x, y];
                }
            }
        }
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
