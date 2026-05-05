

const flattenObject = (obj, parentKey = '', result = {}) => {
    for(let key in obj) {
        let newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            flattenObject(obj[key], newKey, result)
        } else {
            result[newKey] = obj[key]
        }

    }

    console.log("🚀 ~ flattenObject ~ parentKey:", parentKey)
    return result
}

// input = { a: 1, b: { c: 2, d: { e: 3 } } }
// Output: { 'a': 1, 'b.c': 2, 'b.d.e': 3 }
const obj = { a: 1, b: { c: 2, d: { e: 3 } } }
console.log(flattenObject(obj))