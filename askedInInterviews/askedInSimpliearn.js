const a = { key: 'foo' };
const b = { key: 'bar' };
const obj = {};
obj[a] = 123;
obj[b] = 456;
console.log(obj[a]);

// async testdata(response) {
//     await response
// }

// complexTask.promise((data) => {
//     // handle the request
// }).then(() => {
    
// }).catch(() => {
    
// })

// Flat the object.
// i/p => {a:{b:{c:1}},d:2,e:{f:3}}
// o/p => {'a+b+c':1,d:2,'e+f':3}


const input = {a:{b:{c:1}},d:2,e:{f:3}}

function flataObject(input) {
    Object.keys(input).forEach((key) => {
        const value = input[key];
    })
    if (typeof input[key] === "object") {

    }
}
console.log(flataObject(input))
