class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map()
        for(const num of nums) {
        freqMap.set(num,(freqMap.get(num)||0)+1)
    }
        const entries = Array.from(freqMap.entries())
       entries.sort((a, b) => b[1] - a[1]);
        const result=[]
        for(let i=0; i<k;i++) {
        result.push(entries[i][0])
        

        
    }
    return result;
}
}
