/*
1️⃣ Count Frequency of Elements in Array
Problem:
Given an integer array, return a map of frequency of each element.

Input:
nums = [1, 2, 2, 3, 1, 4, 2]

Output:
{ 1: 2, 2: 3, 3: 1, 4: 1 }
*/

function freqOfElem(params) {
    const mapped = {}

    params.forEach((item) => {
        mapped[item] = (mapped[item] || 0) + 1;
    });

    return mapped
}

console.log("🚀 ~ freqOfElem:", freqOfElem([1, 2, 2, 3, 1, 4, 2]))