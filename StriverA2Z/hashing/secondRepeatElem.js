// Second Repeating Element
// Given an array of integers, return the element that causes the second duplicate occurrence in the array.
// Example
// Input: [2,5,1,2,3,5,1]
// Output: 5

function secondRepeatElem(params) {
    const mapped = {};
    let secondElem;
    let count = 0
    for(let num of params) {
        if(mapped[num] !== undefined) {
            count++;
            if (count === 2) {
                secondElem = num;
                return secondElem;
            }
        }
        mapped[num] = (mapped[num] || 0) + 1;
    }

    return secondElem;
}

console.log("🚀  ~ secondRepeatElem:", secondRepeatElem([2,5,1,2,3,5,1]));