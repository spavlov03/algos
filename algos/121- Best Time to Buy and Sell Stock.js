// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
  let profit = 0
  let first = 0
  for (let i=1;i<prices.length;i++){
      console.log("profit is",profit)
      console.log("price is",prices[i])
      console.log("price first",prices[first])
      if (prices[i]-prices[first]>profit){
          profit=prices[i]-prices[first]}
      else
          first++
        
      console.log(profit) 
      }

};

prices = [7,1,5,3,6,4]
maxProfit(prices)