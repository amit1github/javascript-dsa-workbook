function twoSum(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }
  console.log("map:", map)

  let neededElem;
  for (let i = 0; i < nums.length; i++) {
    neededElem =  target - nums[i];

    if(map[neededElem] !== undefined && map[neededElem] !== i) {
       return [i, map[neededElem]]
    }
  }
}

let nums = [1,3,4,2]; // [2,3]
let target = 6;
console.log(twoSum(nums, target));
