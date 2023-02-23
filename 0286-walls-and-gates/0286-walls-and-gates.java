class Solution {
    private static final int EMPTY = Integer.MAX_VALUE;
    private static final int GATE = 0;
    private static final int[] r_dir = new int[]{-1, 0, 1, 0},
                               c_dir = new int[]{0, 1, 0, -1};
    
    public void wallsAndGates(int[][] rooms) {
        int m = rooms.length,
            n = rooms[0].length;
        Queue<int[]> queue = new LinkedList<>();
        for (int r = 0; r < m; ++r) {
            for (int c = 0; c < n; ++c) {
                if (rooms[r][c] == 0) {
                    queue.add(new int[] {r, c});
                }
            }
        }
        
        BFS(rooms, queue);
    }
    
    public void BFS(int[][] rooms, Queue<int[]> queue) {
        
        while (!queue.isEmpty()) {
            int[] front = queue.poll();
            int row = front[0],
                col = front[1];

            for (int d = 0; d < 4; ++d) {
                int nextRow = row + r_dir[d],
                    nextCol = col + c_dir[d];

                if (isInBox(nextRow, nextCol, rooms.length, rooms[0].length)) {
                    if (rooms[nextRow][nextCol] == EMPTY) {
                        rooms[nextRow][nextCol] = rooms[row][col] + 1;
                        queue.add(new int[] {nextRow, nextCol});
                    }
                }
            }
        }
    }
    
    public boolean isInBox(int nextRow, int nextCol, int m, int n) {
        if (
            0 <= nextRow &&
            nextRow < m  &&
            0 <= nextCol &&
            nextCol < n
        ) {
            return true;
        }   
        
        return false;
    }
}