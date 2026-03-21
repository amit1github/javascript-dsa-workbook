// Example 1:
// Input: array[] = {10,5,10,15,10,5};
// Output: 10 15
// Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.


// Example 2:
// Input: array[] = {2,2,3,4,4,2};
// Output: 2 3
// Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.

const input = [10,5,10,15,10,5];
function frequency(nums) {
  let map = new Map()
  
  for(let num of nums) {
      map.set(num, (map.get(num) || 0) + 1)
    }
    
    let maxElem, minElem;
    let maxFreq = -Infinity
    let minFreq = Infinity

    for(let [key, value] of map) {
        if(value > maxFreq) {
            maxFreq = value
            maxElem = key
        };

        if (value < minFreq) {
            minFreq = value
            minElem = key
        }
    }
  
    return [maxElem, minElem]
}

console.log(frequency(input))