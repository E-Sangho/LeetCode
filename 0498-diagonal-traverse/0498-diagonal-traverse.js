/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let m = mat.length,
        n = mat[0].length;
    
    let isGoingUp = true;
    let row = 0, col = 0;
    let result = new Array(m * n);
    let index = 0;
    
    while (row < m && col < n) {
        result[index++] = mat[row][col];
        if (isGoingUp) {
            if (col === n - 1) {
                ++row;
                isGoingUp = false;
                continue;
            }
                
            if (row === 0) {
                ++col;
                isGoingUp = false;
                continue;
            }
            
            --row;
            ++col;
        } else {
           if (row === m - 1) {
               ++col;
               isGoingUp = true;
               continue;
           } 
            
            if (col === 0) {
                ++row;
                isGoingUp = true;
                continue;
            }
            
            ++row;
            --col;
        }
    }
    return result;
};