# 🔥 Basic Hashing – DSA Foundation

## 🎯 Goal
Master frequency counting, existence checking, and complement logic using HashMap before moving to Arrays.

This section is critical because:
- 50% of array & string problems use hashing.
- It improves lookup speed thinking.
- It builds problem-solving confidence.

---

# 🧠 What is Hashing?

Hashing allows storing and retrieving data in **O(1)** average time.

In JavaScript, we use:
- Object `{}` (most common in DSA)
- `Map()` (advanced usage later)

---

# ✅ Sections To Cover (Must Complete)

## 1️⃣ Frequency Counting (Core Pattern)

- Count frequency of elements in array
- Count frequency of characters in string
- Find highest frequency element
- Find lowest frequency element

Focus:
- `map[key] = (map[key] || 0) + 1`
- Traversing object using `for...in`

---

## 2️⃣ Existence Checking

- Check if element exists
- Contains duplicate
- First non-repeating character

Focus:
- `if (map[value] !== undefined)`
- Store boolean flags

---

## 3️⃣ Complement Pattern (Very Important)

- Two Sum
- Pair with given sum
- Pair with given difference

Focus:
- `needed = target - current`
- Check first, then store
- Value → index mapping

---

## 4️⃣ String Based Hashing

- Valid anagram
- Character frequency comparison
- Remove duplicate characters

Focus:
- Comparing two maps
- Using single map and decrementing

---

# ⏱ Time Plan

Total time: **3–4 days**

Daily structure:
- 1 hour concept
- 2 hours solving problems
- 30 mins revision of previous day

Per problem:
- 25–30 minutes max
- If stuck > 30 mins → see hint
- Rewrite solution yourself after understanding

---

# 🚫 Do NOT

- Jump to medium-hard immediately
- Watch solution after 5 minutes
- Memorize without understanding pattern
- Skip dry-run

---

# ✅ Do

- Always write brute force first
- Then optimize using HashMap
- Analyze time complexity
- Explain solution verbally

---

# 🧠 Areas to Focus On

- When to use HashMap?
- What to store as key?
- What to store as value?
- Check-first-then-store pattern
- Space complexity awareness

---

# 🎯 Mastery Checklist (Before Moving to Arrays)

You should be able to:

☑ Write frequency map without thinking  
☑ Solve Two Sum without confusion  
☑ Detect duplicates in O(n)  
☑ Solve Valid Anagram confidently  
☑ Explain time complexity clearly  

Once these are easy → move to Arrays.