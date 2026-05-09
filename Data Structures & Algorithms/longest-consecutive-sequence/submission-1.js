class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         const set = new Set(nums);
    let longest = 0;

    for (const num of set) {
      // num start hoga sequence ka agar num-1 exist nahi karta
      if (!set.has(num - 1)) {
        let current = num;
        let length = 1;

        while (set.has(current + 1)) {
          current++;
          length++;
        }

        longest = Math.max(longest, length);
      }
    }

    return longest;
    }
}
