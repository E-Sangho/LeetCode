/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const N = s.length,
        M = wordDict.length;
  let dp = new Array(N).fill(false);
  
  for (let i = 0; i < N; ++i) {
    for (let word of wordDict) {
      let wordLen = word.length;
      
      if (
          i - wordLen >= -1 && 
          ((i - wordLen === -1) || dp[i - wordLen] === true) &&
          s.substring(i - wordLen + 1, i + 1) === word 
      ) {
        dp[i] = true;
        break;
      }
      
    }
  }
  
  return dp[N - 1];
};