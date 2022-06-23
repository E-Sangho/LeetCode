/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const N = tokens.length;
    let operatorSet = new Set();
    operatorSet.add("+");
    operatorSet.add("-");
    operatorSet.add("*");
    operatorSet.add("/");

    let stack = [];

    for (let i = 0; i < N; ++i) {
        if (operatorSet.has(tokens[i])) {
            let b = stack.pop(),
                a = stack.pop(); 
            if (tokens[i] === "+") {
                stack.push(a + b);
                continue;
            } 
                
            if (tokens[i] === "-") {
                stack.push(a - b);
                continue;
            }
            
            if (tokens[i] === "*") {
                stack.push(a * b);
                continue;
            }
            
            if (tokens[i] === "/") {
                stack.push((a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b)));
                continue;
            }
        }
        stack.push(Number(tokens[i]));
    }     
    
    return stack.at(-1);
};