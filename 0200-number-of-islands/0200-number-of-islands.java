class Solution {
    final int direction[][] = new int[][]{
        {-1, 0},
        {0, 1},
        {1, 0},
        {0, -1},
    };
    
    final char ISLAND = '1',
               WATER = '0';
    
    public int numIslands(char[][] grid) {
        int m = grid.length,
            n = grid[0].length,
            total = 0;
        
        for (int r = 0; r < m; ++r) {
            for (int c = 0; c < n; ++c) {
                if (grid[r][c] != WATER) {
                    BFS(grid, r, c); 
                    ++total;
                }    
            }
        }        
        
        return total;
    }
    
    public void BFS(char[][] grid, int r, int c) {
        int m = grid.length,
            n = grid[0].length;
        
        Queue<int[]> queue = new LinkedList<>();
        
        queue.add(new int[] {r, c});
        grid[r][c] = WATER;
        
        while (queue.size() > 0) {
            int curSize = queue.size();
            for (int i = 0; i < curSize; ++i) {
                int[] front = queue.poll();
                int row = front[0],
                    col = front[1];
                for (int d = 0; d < 4; ++d) {
                    int nextRow = row + direction[d][0],
                        nextCol = col + direction[d][1];
                    if (isInEarth(nextRow, nextCol, m, n) && grid[nextRow][nextCol] == ISLAND) {
                        grid[nextRow][nextCol] = WATER;
                        queue.add(new int[]{ nextRow, nextCol });
                    }
                }
            }
        }
    }
    
    public boolean isInEarth(int r, int c, int m, int n) {
        if (
            0 <= r &&
            r < m &&
            0 <= c &&
            c < n
        ) {
            return true;
        }
        
        return false;
    }
}