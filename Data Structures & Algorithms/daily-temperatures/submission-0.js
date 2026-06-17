class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const res = new Array(n).fill(0);
        let stack = [];
        for(let i = 0; i<n; i++){
            while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]){
                let prevIndex = stack.pop();
                res[prevIndex] = i - prevIndex;
            }
            stack.push(i);
        }
        return res;
    }
}
