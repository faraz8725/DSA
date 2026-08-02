function twoSum(nums, target) {
    // Create a hash map to store visited numbers and their indices
    const visitedNumbers = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        // Check if the required complement is already in our map
        if (visitedNumbers.has(complement)) {
            return [visitedNumbers.get(complement), i];
        }

        // Store the current number with its index
        visitedNumbers.set(currentNum, i);
    }

    // Return an empty array if no pair is found (failsafe)
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1] (because nums[0] + nums[1] === 9)
