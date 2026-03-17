// First Repeating Element
// Given an array of integers, return the first element that appears more than once.
// Example
// Input: [2,5,1,2,3,5,1]
// Output: 2

function firstRepeatingElem(params) {
    const mapped = {};
    let firstElem;
    for(let num of params) {
        
        if(mapped[num] !== undefined) {
            firstElem = num;
            return firstElem;
        }
        mapped[num] = (mapped[num] || 0) + 1;
    }

    return firstElem;
}

console.log("🚀  ~ firstRepeatingElem:", firstRepeatingElem([2,5,1,2,3,5,1]))