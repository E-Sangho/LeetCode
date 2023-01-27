/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
   let m = mat.length,
       n = mat[0].length;
    
    let arr = Array.from({ length: m + n - 1}, () => new Array());
    let result = new Array(m * n);
    let index = 0;
    
    for (let row = 0; row < m; ++row) {
        for (let col = 0; col < n; ++col) {
            arr[row + col].push(mat[row][col]);
        }
    }
    
    for (let d = 0; d < m + n - 1; ++d) {
        if (d % 2 == 0) {
            for (let i = arr[d].length - 1; i >= 0; --i) {
                result[index++] = arr[d][i];
            } 
        } else {
            for (let i = 0; i < arr[d].length; ++i) {
                result[index++] = arr[d][i];
            } 
        }
    }
    
    return result;
};