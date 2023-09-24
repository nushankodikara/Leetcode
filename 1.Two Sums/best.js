var twoSum = function (nums, target) {
    const numToIndex = new Map(); // Create a Map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the Map
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }

        // Store the current number and its index in the Map
        numToIndex.set(nums[i], i);
    }

    throw new Error("No solution found");
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
