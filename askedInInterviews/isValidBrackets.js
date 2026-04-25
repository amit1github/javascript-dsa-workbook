/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.
 */

function isValidBrackets(str) {
    let stack = [];
    const map = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
    };

    for (const char of str) {
        if (map[char] === undefined) { // checking map keys with STR inputs
            stack.push(char)
            console.log("🚀 ~ isValidBrackets ~ stack:", stack)
        } else {

            console.log("🚀 ~ isValidBrackets ~ stack[stack.length-1]:", stack[stack.length-1])
            console.log("🚀 ~ isValidBrackets ~ map[char]:", map[char])
            if(stack.length === 0 || stack[stack.length-1] !== map[char]) {
                return false;
            }

            stack.pop()
        }
    }

    return stack.length === 0
}

console.log(isValidBrackets('{[()]}'))