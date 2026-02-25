/* 
Problem Statement: Given an integer N, return true if it is a palindrome else return false.

A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.


Example 1:
Input:N = 4554
Output:Palindrome Number
Explanation: The reverse of 4554 is 4554 and therefore it is palindrome number
                                        
Example 2:
Input:N = 7789          
Output: Not Palindrome
Explanation: The reverse of number 7789 is 9877 and therefore it is not palindrome
            
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
