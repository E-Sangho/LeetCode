class Solution {
    private final int EMPTY = Integer.MAX_VALUE;
    private final int GATE = 0;
    private final List<int[]> directions = Arrays.asList(
        new int[] {1, 0},
        new int[] {0, 1},
        new int[] {-1, 0},
        new int[] {0, -1}
    );
    
    public void wallsAndGates(int[][] rooms) {
        Queue<int[]> queue = new LinkedList<>();
        int m = rooms.length,
            n = rooms[0].length;
        
        for (int r = 0; r < m; ++r) {
            for (int c = 0; c < n; ++c) {
                if (rooms[r][c] == GATE) {
                    queue.add(new int[] {r, c});
                }
            }
        }
        
        BFS(rooms, queue);
    }
    
    public void BFS(int[][] rooms, Queue<int[]> queue) {
        int m = rooms.length,
            n = rooms[0].length;
        while (!queue.isEmpty()) {
            int[] front = queue.poll();
            int cRow = front[0],
                cCol = front[1];
            
            for (int i = 0; i < 4; ++i) {
                int[] dir = directions.get(i);
                int nRow = cRow + dir[0],
                    nCol = cCol + dir[1];
                
                if (isInLand(nRow, nCol, m, n)) {
                    if (rooms[nRow][nCol] == EMPTY) {
                        rooms[nRow][nCol] = rooms[cRow][cCol] + 1;
                        queue.add(new int[] {nRow, nCol});
                    }
                }
            }
        }
    }
    
    public boolean isInLand(int row, int col, int m, int n) {
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