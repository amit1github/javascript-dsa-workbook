// Problem Statement: Given an array, we have to find the largest element in the array.

// Example 1:
// Input:
// arr[] = {2, 5, 1, 3, 0}  
// Output:
// 5  
// Explanation:
// 5 is the largest element in the array.

// Example 2:
// Input:
// arr[] = {8, 10, 5, 7, 9}  
// Output:
// 10  
// Explanation:
// 10 is the largest element in the array.


function largestElem(nums) {
    let max = nums[0];
    for(let i=0;i<nums.length;i++) {
        if(nums[i] > max) {
            max = nums[i]
        }
    }

    return max;
}

console.log("🚀 ~ largestElem:", largestElem([2, 5, 1, 3, 0]))
