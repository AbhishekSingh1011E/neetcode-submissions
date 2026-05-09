class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let maxLenght =0
        let CharSet = new Set
        for(let right= 0; right<s.length;right++){
            while(CharSet.has(s[right]))
            {
                CharSet.delete(s[left])
            left++
            }
           CharSet.add(s[right])
       
        let currentLenght = right - left + 1
        maxLenght =Math.max(currentLenght , maxLenght)
    }
       return maxLenght
}
 }
