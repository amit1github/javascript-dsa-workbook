/*
? Find the highest/lowest frequency element.
? Problem Statement: Problem Statement: Given an array of size N. Find the highest and lowest frequency element.

Example 1:
Input: array[] = [10,5,10,15,10,5];
Output: 10 15
Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.

Example 2:
Input: array[] = [2,2,3,4,4,2];
Output: 2 3
Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.
*/

const array = [10, 5, 10, 15, 10, 5];
// const array = [2,2,3,4,4,2];

function highestOccuringElem(array) {
  const mapped = {};
  let output = [];

  array.forEach((item) => {
    mapped[item] = (mapped[item] || 0) + 1;
  });

  console.log("🚀 ~ highestOccuringElem ~ mapped:", mapped);

  const getKeysOnly = Object.keys(mapped);
  const getValuesOnly = Object.values(mapped);

  const largest = Math.max(...getValuesOnly);
  const smallest = Math.min(...getValuesOnly);

  for (let i = 0; i < getValuesOnly.length; i++) {
    if (getValuesOnly[i] === largest) {
      output.push(Number(getKeysOnly[i]));
    } else if (getValuesOnly[i] === smallest) {
      output.push(Number(getKeysOnly[i]));
    }
  }

  return output;
}

console.log("🚀 ~ highestOccuringElem:", highestOccuringElem(array));
