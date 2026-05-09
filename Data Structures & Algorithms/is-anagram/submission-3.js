class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length)
        return false;
         return s.split('').sort().join('') === t.split('').sort().join('');
    }
}
 let solution = new Solution();
 console.log(solution.isAnagram("listen","silent"));
