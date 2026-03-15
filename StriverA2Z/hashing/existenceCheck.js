// ## 2️⃣ Existence Checking

// - Check if element exists
// - Contains duplicate
// - First non-repeating character

// Focus:
// - `if (map[value] !== undefined)`
// - Store boolean flags

function checkExistence(params) {
    const mapped = {};

    for(let nums of params) {
        if (mapped[nums]) {
            return true
        }
        mapped[nums] = true
    }

    return false;
}

console.log("🚀 ~ checkExistence:", checkExistence([1,2,3,4]))




