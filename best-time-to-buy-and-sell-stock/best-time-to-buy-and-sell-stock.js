/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let current = 100001;
  let best = 0;
  
  for (let price of prices) {
    if (current > price) {
      current = price;
    } else {
      best = Math.max(best, price - current);
    }
  }    
  
  return best;
};