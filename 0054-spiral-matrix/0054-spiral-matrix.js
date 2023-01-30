/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let row = 0, col = 0, m = matrix.length, n = matrix[0].length;
    let ans = [];
    let rowMin = 0, rowMax = m - 1, colMin = 0, colMax = n - 1;
    let direction = "right";
    
    while(ans.length < m * n) {
        ans.push(matrix[row][col]);
        if (direction === "right") {
            if (col === colMax) {
                ++row;
                direction = "down"; 
                ++rowMin;
                continue;
            }    
            ++col;
            continue;
        }     
        
        if (direction === "down") {
            if (row === rowMax) {
                --col;
                direction = "left";
                --colMax;
                continue;
            } 
            ++row;
            continue;
        }
        
        if (direction === "left") {
            if (col === colMin) {
                --row;
                direction = "up";
                --rowMax;
                continue;
            }
            --col;
            continue;
        }
        
        if (direction === "up") {
            if (row === rowMin) {
                ++col;
                direction = "right";
                ++colMin;
                continue;
            }    
            --row;
            continue;
        }
    }
    
    return ans;
};