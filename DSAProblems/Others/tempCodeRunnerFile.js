// const string="MADAM";
// const mapped={};
// for(let element of input) {
//     // if(output[element] === undefined)
//     // {
//     //     output[element] = 1;
//     // } else {
//     //     output[element]++;
//     // }
//     output[element] = (output[element]  || 0)  + 1;
// }; 
// console.log(output)-

// let duplArr = [1, 2, 3, 1]
// function hasDuplicates(duplArr) {
//     for(let elem of duplArr) {
//          if(mapped[elem]) return true
//         mapped[elem] = true ;
//     }
//    return false
// }
// console.log(hasDuplicates(duplArr))

let nums = [1,2,2,3,1]
let getFreq = {};
function freq(nums) {
    for(let elem of nums) {
        getFreq[elem] = (getFreq[elem] || 0) + 1
    }

    console.log(getFreq)
    for(let elem in getFreq) {
        console.log('elem', elem)
        if(elem < 2) {
            return `Found non repeating elem: ${object[elem]}`
        } else {
             return `Found repeating elems: ${object[elem]}`
        }
    }
}
console.log(freq(nums));