function twoSum(nums, target) {
    const map = new Map(); // Stores: key = number value, value = index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement is already in the map
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Otherwise, save the current number and its index
        map.set(nums[i], i);
    }
    
    return []; // Return empty if no solution is found
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
