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
    for (let j = 0; j < M; ++j) {
      let wordLen = wordDict[j].length;
      
      if (
          i - wordLen >= -1 && 
          ((i - wordLen === -1) || dp[i - wordLen] === true) &&
          s.substring(i - wordLen + 1, i + 1) === wordDict[j]
      ) {
        dp[i] = true;
        break;
      }
      
    }
  }
  
  return dp[N - 1];
};