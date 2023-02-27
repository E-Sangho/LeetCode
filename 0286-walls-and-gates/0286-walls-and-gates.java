class Solution {
    static final int WALL = -1,
              GATE =  0,
              INF  =  Integer.MAX_VALUE;
    static final int[][] direction  =  {
            {-1, 0},
            {0, 1},
            {1, 0},
            {0, -1}
        };

            
    
    public void wallsAndGates(int[][] rooms) {
        int m = rooms.length,
            n = rooms[0].length;

        for (int r = 0; r < m; ++r) {
            for (int c = 0; c < n; ++c) {
                if (rooms[r][c] == GATE) {
                    BFS(rooms, r, c);   
                }
            }
        }
    }
    
    public void BFS(int[][] rooms, int r, int c) {
        int m = rooms.length,
            n = rooms[0].length;
                
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{ r, c });
        int depth = 0;
        
        while (queue.size() > 0) {
            int curSize = queue.size();
            ++depth;
            
            for (int i = 0; i < curSize; ++i) {
                int[] front = queue.poll();
                int row = front[0],
                    col = front[1];
                
                for (int d = 0; d < 4; ++d) {
                    int nearRow = row + direction[d][0],
                        nearCol = col + direction[d][1];
                    
                    if (isInBox(nearRow, nearCol, m, n) && depth < rooms[nearRow][nearCol]) {
                        rooms[nearRow][nearCol] = depth;
                        queue.offer(new int[] { nearRow, nearCol });
                    }
                } 
            }
        }
    }
    
    public boolean isInBox(int row, int col, int m, int n) {
        if (
            0 <= row &&
            row < m  &&
            0 <= col &&
            col < n
        ) {
            return true;
        }
        
        return false;
    }
}
