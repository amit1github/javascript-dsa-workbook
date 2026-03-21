// Two Sum
// Find two numbers that add up to a target.
// Example
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// (Hint: Hash map storing numbers you’ve seen.)

/*
2+7=9;

9(take it always) - 
take first elem - 9 = see how many remaining 

Problem take 2 elem to match the target....  elem1+elem2=target // nums = [2,7,11,15], target = 9
step 1: already have fixed target 
        >> a.2 + b.7 = target.9 (final solution)
        >> a.7 = target.9 - b.2. --- iteration 1
        >> a.2 = target.9 - b.2  --- iteration 1
        >> a.2 = target.9 - b.2
*/

// Input: nums = [2,7,11,15], target = 9
function twoSum(nums, target) {
    // brute forrce approach O(N2)
    // let sum=0;
    // for(let i=0; i<nums.length; i++) {
    //     for(let j=i+1; j<=nums.length; j++) {
    //         if(nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }

    const mapped = new Map()
    for(let i=0; i<nums.length; i++) {
        let needed = target - nums[i]; // 9-[2]=7 >> 9-[7]=2

        if (mapped.has(needed)) { // needed 7 exist? >> needed 2 exist?
            return [mapped.get(needed), i] // [needed is 2 as get returns key ,I is 1]
        }

        mapped.set(nums[i] , i) // 2(key), 0(value) //key(number) → value(index)
    }
}

console.log("🚀  ~ twoSum:", twoSum([2,7,11,15], 9));