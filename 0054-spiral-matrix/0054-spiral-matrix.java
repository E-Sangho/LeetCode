class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {

        int m = matrix.length, n = matrix[0].length;
        int row = 0, col = 0;
        int rowMin = 0, rowMax = m - 1, colMin = 0, colMax = n - 1;
        String direction = "right";
        List<Integer> result = new ArrayList<>();
        
        while (result.size() < m * n) {
            result.add(matrix[row][col]);
            
            if (direction == "right") {
                if (col == colMax) {
                    ++row;
                    ++rowMin;
                    direction = "down";
                    continue;
                }
                ++col; 
                continue;
            }
            
            if (direction == "down") {
                if (row == rowMax) {
                    --colMax;
                    --col;
                    direction = "left";
                    continue;
                } 
                ++row;
                continue;
            }
            
            if (direction == "left") {
                if (col == colMin) {
                    --rowMax;
                    --row;
                    direction = "up";
                    continue;
                } 
                --col;
                continue;
            }
            
            if (direction == "up") {
                if (row == rowMin) {
                    ++col;
                    ++colMin;
                    direction = "right";
                    continue;
                } 
                --row;
                continue;
            }
        }
        return result; 
    }
}