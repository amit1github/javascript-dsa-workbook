/* 
Problem Statement: Given an integer N return the reverse of the given number.
Note: If a number has trailing zeros, then its reverse will not include them. 
For e.g , reverse of 10400 will be 401 instead of 00401.

Example 1:
Input: N = 12345
Output: 54321
Explanation: The reverse of 12345 is 54321.

Input: N = 7789                
Output: 9877
Explanation: The reverse of number 7789 is 9877.
*/

function reverseDigitsInNumber(num) {
    //   let reverse = num.toString().split("").reverse().join("");
    //   return parseInt(reverse);
    let reverse = 0
    while(num > 0) {
        let lastDigit = num % 10; // finding remainder
        reverse = reverse * 10 + lastDigit; // Shift left, then add lastDigit
        num = Math.floor(num/10); // Math.floor(): a static method that rounds a number down to the nearest whole integer. 
    }

    return reverse;
}

console.log("🚀 reverseDigitsInNumber:", reverseDigitsInNumber(12345))
