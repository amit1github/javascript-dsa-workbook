const array = [1, 2, 3, 4];
const target = 7;

function targetSum(array, target) {
 const map = new Map()
    for(let arrayItems of array) {
        map.set(arrayItems, map.get((arrayItems) +0))
    }
    console.log(Array.from(map));
    return true;
}

const resp = targetSum(array, target);
console.log(resp)