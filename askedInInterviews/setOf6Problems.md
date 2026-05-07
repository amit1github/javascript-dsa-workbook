Q)Chunk Array
// Input: chunkArray([1,2,3,4,5], 2) 
//Output: [[1,2], [3,4], [5]]

// Input: chunkArray([1, 2, null, 3, undefined, 4, 5], 3) 
//Output: [[1,2,3], [4,5]]


Q) second highest Value
//Input:[1, 12,10, 10, 11, 11, 12, 2, 3, 3, 4, 5, 6, 7, 8, 9]
// Output: 11

Q)Is One String a Rotation of Another?

Input:
a = "erbottlewat"
b = "waterbottle"

Output:
true

Input:
a = "abcd"
b = "acbd"

Output:
false


Q) Write a function groupBy(arr, key) that groups objects in an array by a given property(must be dynamic and be passed as sencond param).

handle negative scenerios as well if the key is missing 

If possible please try to solve in TS

console.log(groupBy(
  [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 21 }
  ], 
  "age"
));
/*
Expected:
{
 21 :[
  { name: "Alice", age: 21},
  { name: "Charlie", age: 21 } 
],
25:[
 { name: "Bob", age: 25 }
]
}*/
