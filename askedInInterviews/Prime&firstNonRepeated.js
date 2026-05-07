// Find the first non-repeated character in a string.
// Find prime numbers between 1-100.

function firstNonRepeatedChar(char) {
    const charMap = {};

    for(let str of char) {
        charMap[str] = (charMap[str] || 0) + 1;
    }

    console.log(charMap)
    let incr = 0;
    for(let str of char) {
        if (charMap[str] === 1) {
            incr++;
            if (incr === 2) {
                return str; // second non-repeating char
            }
        }
    }

    return false
}
console.log(firstNonRepeatedChar('aabbbcdde'))