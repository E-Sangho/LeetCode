/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const N = s.length;
  let stack = [];
  let answer = "";
  for (let i = 0; i < N; ++i) {
    if (s[i] !== "]") {
      stack.push(s[i]);
      continue;
    }
    
    let tempString = "";
    
    while (stack[stack.length - 1] !== "[") {
      tempString = stack.pop() + tempString;
    }
    
    stack.pop();
    
    let num = "";
    
    while ("0" <= stack[stack.length - 1] && stack[stack.length - 1] <= "9") {

      num = stack.pop() + num;
    }
    
    num = parseInt(num);
    let ans = "";
    
    for (let j = 0; j < num; ++j) {
      ans = tempString + ans; 
    }
    
    for (let k = 0; k < ans.length; ++k) {
      stack.push(ans[k]);
    }
  }
  
  while (stack.length > 0) {
    answer = stack.pop() + answer;
  } 
  
  return answer;
};