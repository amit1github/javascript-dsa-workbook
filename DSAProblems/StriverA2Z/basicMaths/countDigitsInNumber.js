/* 
Problem Statement: Given an integer N, return the number of digits in N.

Example 1:
Input:N = 12345
Output:5
Explanation:  The number 12345 has 5 digits.
                        
Example 2:
Input:N = 7789              
Output: 4
Explanation: The number 7789 has 4 digits. 
*/

function countDigitsInNumber(num) {
    //   let length = String(num).length
    //   return length;

    let count = 0;
    num = Math.abs(num); // handle negative num
    console.log("🚀 ~ num:", num)

    if (num === 0) return 1;

    while(num > 0) {
        num = Math.floor(num/10)
        count++;
    }

    return count;
}

console.log("🚀 countDigitsInNumber:", countDigitsInNumber(-12345))
