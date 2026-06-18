class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        let maxArea = 0
        const stack = [];
        for(let i = 0; i< heights.length; i++){
            let start = i; 
            while(stack.length && stack[stack.length-1][1] > heights[i]){
                 const [index, height] = stack.pop();
            const width = i - index;     
             maxArea = Math.max(maxArea, height * width);
              start = index;  
            }
             stack.push([start, heights[i]]);
        }
         const n = heights.length;
    for (const [index, height] of stack) {
        const width = n - index;
        maxArea = Math.max(maxArea, height * width);
    }
 return maxArea;
    }
}