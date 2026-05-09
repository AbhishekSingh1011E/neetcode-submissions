class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let clean = ""
        for(let ch of s){
            if( isAlnum(ch)){
                clean += ch.toLowerCase()
            }
        }
        let left =0;
        let right =clean.length-1
        while(left<right){
            if(clean[left] !== clean[right]) {
                return false
            }
            left++;
            right--;
        }
        return true
    }
}
  function isAlnum(ch) {
    return /^[a-z0-9]$/i.test(ch);
}
