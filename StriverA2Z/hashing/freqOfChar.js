/*  
## 2️⃣ Count Frequency of Characters in String

### Problem:
Return frequency of each character.

### Input:
s = "programming"

### Output:
{
  p:1,
  r:2,
  o:1,
  g:2,
  a:1,
  m:2,
  i:1,
  n:1
}
*/

let input = 'programming';
function freqOfChar(params) {
    const mapped = {};
    // let inputArr = Array.from(params)
    // console.log("🚀 ~ freqOfChar ~ inputArr:", inputArr)
    // [...params].forEach((val) => {
    //     mapped[val] = (mapped[val] || 0) + 1
    // });

    for(const char of params) {
        mapped[char] = (mapped[char] || 0) + 1
    }

    return mapped;
} 

console.log("🚀 ~ freqOfChar:", freqOfChar(input))
