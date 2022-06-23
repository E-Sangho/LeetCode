/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const N = s.length;
    let stack = [];
    
    for (let i = 0; i < N; ++i) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
            continue;
        }
        
        if (
            (stack.at(-1) === "(" && s[i] === ")") ||
            (stack.at(-1) === "{" && s[i] === "}") ||
            (stack.at(-1) === "[" && s[i] === "]")
        ) {
            stack.pop();
            continue;
        }
        
        return false;
    }
    
    if (stack.length > 0) {
        return false;
    }  
    
    return true;
};