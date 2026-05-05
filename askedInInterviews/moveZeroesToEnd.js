const input = [1,2,3,0,4,5,6,0,7,8,9,0,10,11,12]
// [1,2,3,4,5,6,7,8,9,10,11,12,0,0,0]

function moveZeroesToEnd(arr) {
    let last = 0;
    
    for(let i =0; i<arr.length; i++) {
        if(arr[i] !== 0) {
            [arr[last], arr[i]] = [arr[i], arr[last]];
            last++;
        }
    }
    
    return arr;
}

console.log(moveZeroesToEnd(input))
