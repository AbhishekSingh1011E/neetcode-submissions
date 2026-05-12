class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n = nums.length;
            k = k % n;
        function reverse(left , right){
            while(left < right){
                let temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                left++;
                right--;
            }
        }
        reverse(0 , n-1)
         reverse(0 , k-1)
          reverse(k , n-1)
    }
}
