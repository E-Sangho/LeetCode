/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const N = tokens.length;
    const Operator = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => Math.trunc(a / b),
        "*": (a, b) => a * b,
    };

    let stack = [];

    for (let i = 0; i < N; ++i) {
        if (tokens[i] in Operator) {
            let b = stack.pop(),
                a = stack.pop(); 
            let operation = Operator[tokens[i]];
            stack.push(operation(a, b));
            continue;
        }
        stack.push(Number(tokens[i]));
    }     
    
    return stack.at(-1);
};