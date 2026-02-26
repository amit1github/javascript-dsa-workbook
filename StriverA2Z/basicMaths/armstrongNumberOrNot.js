/*
Check if a number is Armstrong Number or not
Problem Statement:Given an integer N, return true it is an Armstrong number otherwise return false.
An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

Example 1:
Input:N = 153
Output:True
Explanation: 1^3+5^3+3^3 = 1 + 125 + 27 = 153
                                        
Example 2:
Input:N = 371                
Output: True
Explanation: 3^3+7^3+1^3 = 27 + 343 + 1 = 371   
*/

function isArmstrongNumber(num) {
    if(num < 0) return false;

    let strNum = num.toString();
    let power = strNum.length;
    let sum = 0;
    for(let i=0; i<strNum.length; i++) {
      let digit = Number(strNum[i])
      sum += digit ** power;
    }
    return num === sum;
}

console.log("🚀 isArmstrongNumber:", isArmstrongNumber(371))