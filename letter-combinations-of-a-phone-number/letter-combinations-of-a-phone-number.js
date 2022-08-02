/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const N = digits.length;
  
  if (N === 0) {
    return [];
  }
  
  let keyMap = new Map();
  keyMap.set("2", "abc");
  keyMap.set("3", "def");
  keyMap.set("4", "ghi");
  keyMap.set("5", "jkl");
  keyMap.set("6", "mno");
  keyMap.set("7", "pqrs");
  keyMap.set("8", "tuv");
  keyMap.set("9", "wxyz");
  
  let ans = [];
  let letter = new Array(N).fill(null);
  
  BackTrack(0);
    
  return ans;
  
  function BackTrack(depth) {
    if (depth === N) {
      ans.push(connect(letter));
      return;
    }
    
    for (let s of keyMap.get(digits[depth])) {
      letter[depth] = s;
      BackTrack(depth + 1);    
    }
  }
  
  function connect(x) {
    let ans = "";
    for (let i = 0; i < x.length; ++i) {
      ans += x[i];
    }
    
    return ans;
  }
};