/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let M = grid.length,
        N = grid[0].length;      
    const moveX = [0, 0, 1, -1],
          moveY = [1, -1, 0, 0];  
    let count = 0;
     
    for (let r = 0; r < M; ++r) {
        for (let c = 0; c < N; ++c) {
           if (grid[r][c] === "1") {
               grid[r][c] === "0";
               DFS(r, c);
               ++count;
           } 
        }
    }
    
    return count;
    

    function DFS(m, n) {
        for (let i = 0; i < 4; ++i) {
            let newX = m + moveX[i],
                newY = n + moveY[i];
            if (isInBox(newX, newY) && grid[newX][newY] === "1") {
                grid[newX][newY] = "0";
                DFS(newX, newY);
            }  
        }
        
    }
    
    function isInBox(m, n) {
        if (0 <= m && m < M && 0 <= n && n < N) {
            return true;
        }
        
        return false;
    }
};

