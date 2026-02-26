# 🔥 Basic Hashing – Complete Must Solve Set

This file contains ALL hashing problems you must solve before moving to Arrays.

If you can solve these confidently → you are ready.

---

# 🟢 SECTION 1 – Frequency Counting (Foundation)

---

## 0️⃣ Learn basic hashing (from Striver section)
- Basic hashing
- Counting Frequencies of Array Elements
- Highest occurring element in an Array 

## 1️⃣ Count Frequency of Elements in Array

### Problem:
Given an integer array, return a map of frequency of each element.

### Input:
nums = [1, 2, 2, 3, 1, 4, 2]

### Output:
{
  1: 2,
  2: 3,
  3: 1,
  4: 1
}

---

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

---

## 3️⃣ Highest Frequency Element

### Problem:
Return element with highest frequency.
If tie → return smallest element.

### Input:
nums = [1,2,2,3,1,4,2]

### Output:
2

---

# 🟢 SECTION 2 – Existence / Seen Before

---

## 4️⃣ Contains Duplicate

### Problem:
Return true if any element appears more than once.

### Input:
nums = [1,2,3,4,1]

### Output:
true

---

## 5️⃣ First Non-Repeating Character

### Problem:
Return first character that appears only once.

### Input:
s = "leetcode"

### Output:
'l'

---

# 🟢 SECTION 3 – Complement Pattern (Very Important)

---

## 6️⃣ Two Sum

### Problem:
Return indices of two numbers such that they add to target.

### Input:
nums = [2,7,11,15]
target = 9

### Output:
[0,1]

Constraint:
Time complexity must be O(n)

---

## 7️⃣ Pair With Given Difference

### Problem:
Return true if there exists two elements whose difference is k.

### Input:
nums = [1,5,3,4,2]
k = 2

### Output:
true

---

# 🟢 SECTION 4 – String Hashing

---

## 8️⃣ Valid Anagram

### Problem:
Return true if two strings are anagrams.

### Input:
s = "anagram"
t = "nagaram"

### Output:
true

---

## 9️⃣ Remove Duplicate Characters (Maintain Order)

### Problem:
Remove duplicate characters while preserving first occurrence.

### Input:
s = "programming"

### Output:
"progamin"

---

# 🟢 SECTION 5 – Prefix Hash Intro (Bridge to Arrays)

---

## 🔟 Subarray Sum Equals K (Intro Version)

### Problem:
Given an array of integers and an integer k,
return true if any continuous subarray sums to k.

### Input:
nums = [1,2,3,4]
k = 6

### Output:
true
Explanation:
2 + 3 + 1 = 6

---

# 🟢 BONUS (Recommended)

---

## 1️⃣1️⃣ Majority Element (> n/2 times)

### Input:
nums = [2,2,1,1,1,2,2]

### Output:
2