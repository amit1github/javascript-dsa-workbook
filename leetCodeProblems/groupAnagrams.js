// Input: strs = ["act","pots","tops","cat","stop","hat"]
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

function groupAnagrams(strs) {
  if (strs.length < 2) return [strs];
  let map = {};

  let sortedElem;
  for (let i = 0; i < strs.length; i++) {
    sortedElem = strs[i].split("").sort().join("");

    map[sortedElem] = map[sortedElem] || [];
    map[sortedElem].push(strs[i]);
  }

  return Object.values(map).sort((a,b) => a.length - b.length);
}

let strs = ["act", "pots", "tops", "cat", "stop", "hat"];
console.log(groupAnagrams(strs));
