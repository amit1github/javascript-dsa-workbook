function findDuplicateAndMissing(array) {
    let duplicates = -1;
    let missing = -1;
    let map = {};

    for(let arr of array) {
        map[arr] = (map[arr] || 0) + 1;
    }

    for (let i = 0; i <= array.length; i++) {
        if(!map[i]) {
            missing = i
        } else if (map[i] > 1) {
            duplicates = i
        }        
    }

    return {duplicates, missing}
}

console.log(findDuplicateAndMissing([1,3,2,4,1]))