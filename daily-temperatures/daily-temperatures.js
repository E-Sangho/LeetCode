/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const N =  temperatures.length;
    let ans = new Array(N).fill(0);
    let stack = [];
    
    for (let i = 0; i < N; ++i) {
        while (stack.length > 0 && stack.at(-1)[0] < temperatures[i]) {
            let [temp, index] = stack.pop();
            ans[index] = i - index; 
        }  
        stack.push([temperatures[i], i]);
    }
    
    return ans;
};