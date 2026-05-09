class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice =prices[0]
        let maxProfit= 0;
        for(let i =0;i< prices.length;i++) {
        let profit = prices[i] - minPrice
        if(profit > maxProfit) {
            maxProfit = profit
        }
            if(prices[i] < minPrice){
                minPrice = prices[i];
            }

             
        }
        return maxProfit
    }

       
    

   
}
