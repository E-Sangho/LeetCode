/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 *
 * i번째 날에 1일 티켓 : dp[i] =  dp[i - 1] + costs[0]
 * i번째 날에 7일 티켓 : dp[i] =  dp[i - 7] + costs[1]
 *                   dp[i] = dp[i - 1] ... = dp[i - 6] 
 * i번째 날에 30일 티켓 : dp[i] = dp[i - 30] + costs[2]
 *                    dp[i] = dp[i - 1] ... = dp[i - 29]
 */
var mincostTickets = function(days, costs) {
  const lastDay = days.at(-1);
  let dp = new Array(366);

  return TopDown(1);  
  
  function TopDown(day) {
    if (day > 365) {
      return 0;
    }
    
    if (days.includes(day)) {
      if (dp[day] !== undefined) {
        return dp[day];
      }

      dp[day] = Math.min(TopDown(day + 1) + costs[0], 
                         TopDown(day + 7) + costs[1], 
                         TopDown(day + 30)+ costs[2]);
    } else {
      dp[day] = TopDown(day + 1);
    }
    
    return dp[day];
  }
};