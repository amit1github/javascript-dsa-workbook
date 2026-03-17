// Two Sum
// Find two numbers that add up to a target.
// Example
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// (Hint: Hash map storing numbers you’ve seen.)

function twoSum(nums, target) {
    const mapped = {};
    for(let num of nums) {
        mapped[num] = (mapped[num] || 0) + 1;
    }

    return mapped
}

console.log("🚀  ~ twoSum:", twoSum([2,7,11,15], 9));