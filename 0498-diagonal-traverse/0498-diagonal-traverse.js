/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let row = 0,
        col = 0,
        index = 0,
        m = mat.length,
        n = mat[0].length;
    let memo = new Array(),
        result = new Array();
    
    for (let d = 0; d < m * n; ++d) {
        if (d < n) {
            row = 0;
            col = d;
        } else {
            row = d - (n - 1);
            col = n - 1;
        }
        
        while (row < m && 0 <= col) {
            memo.push(mat[row][col]);
            ++row;
            --col;
        }
        
        if (d % 2 === 0) {
            memo.reverse();
        }
        result = result.concat(memo);
        memo = [];
    }
    
    return result;
};