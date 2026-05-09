class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s,k) {
       let left = 0
        let maxLength = 0
        let maxFreq = 0
        let charCount = {}
        for(let right = 0;right< s.length ; right++){
            let char =s[right]
            charCount[char]= (charCount[char] || 0) + 1
            maxFreq = Math.max(maxFreq , charCount[char])
            let windowsize = right - left + 1
            let  changeNeed = windowsize - maxFreq
            if(changeNeed > k){
                charCount[s[left]]--;
                left++
            }
            windowsize = right - left + 1
            maxLength = Math.max(maxLength , windowsize)
            
        }
       return maxLength
    }
   
}
