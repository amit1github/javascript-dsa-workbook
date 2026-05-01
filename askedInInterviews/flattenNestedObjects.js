// input = { a: 1, b: { c: 2, d: { e: 3 } } }
// Output: { 'a': 1, 'b.c': 2, 'b.d.e': 3 }

const flattenObject = (obj, parentKey = '', result = {}) => {
    for(let key in obj) {
        console.log("key:", key)
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        console.log("newKey:", newKey)

        if(typeof obj[key] === 'object' && obj[key] !== null) {
            console.log("🚀 ~ obj[key], newKey, result:", obj[key], newKey, result)
            flattenObject(obj[key], newKey, result)
        } else {
            result[newKey] = obj[key]
            console.log("result:", result)
            
        }
    }

    return result;
}

const obj = { a: 1, b: { c: 2, d: { e: 3 } } }
console.log(flattenObject(obj))