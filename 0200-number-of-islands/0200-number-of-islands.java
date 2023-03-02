class Solution {
    final char WATER = '0',
               ISLAND = '1';
    
    final int[][] directions = new int[][] {
        { -1, 0 },
        { 0, 1 },
        { 1, 0 },
        { 0, -1 }
    };
    
    public int numIslands(char[][] grid) {
        int m = grid.length,
            n = grid[0].length,
            count = 0;
        
        for (int r = 0; r < m; ++r) {
            for (int c = 0; c < n; ++c) {
                if (grid[r][c] == ISLAND) {
                    DFS(grid, r, c); 
                    ++count; 
                }
            }
        }
        
        return count;
    }
    
    public void DFS(char[][] grid, int r, int c) {
        int m = grid.length,
            n = grid[0].length;
        
        Stack<int[]> stack = new Stack<>();     
        stack.push(new int[] { r, c });
        
        while (stack.size() > 0) {
            int[] front = stack.pop();
            int row = front[0],
                col = front[1];
            
            for (int d = 0; d < 4; ++d) {
                int nextRow = row + directions[d][0],
                    nextCol = col + directions[d][1];
                
                if (isInEarth(nextRow, nextCol, m, n) && grid[nextRow][nextCol] == ISLAND) {
                    grid[nextRow][nextCol] = WATER;
                    stack.push(new int[] { nextRow, nextCol });
                }
            }
        }
    } 
    
    public boolean isInEarth(int r, int c, int m, int n) {
        if (
            0 <= r &&
            r < m  &&
            0 <= c &&
            c < n  
        ) {
            return true;
        }
        
        return false;
    }
    
}