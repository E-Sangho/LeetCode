import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public int[] findDiagonalOrder(int[][] mat) {
        int m = mat.length,
            n = mat[0].length;
        int[] result = new int[m * n];
        int index = 0;
        boolean isGoingUp = true;
        int row = 0, col = 0;
        
        while (row < m && col < n) {
            result[index++] = mat[row][col];
            if (isGoingUp) {
               if (col == n - 1) {
                    row += 1; 
                    isGoingUp = false;
                    continue;
               }
                
               if (row == 0) {
                    col += 1;    
                    isGoingUp = false;
                    continue;
               }  
                
               --row;
                ++col;
            } else {
                if (row == m - 1) {
                    col += 1;
                    isGoingUp = true;
                    continue;
                }
                
                if (col == 0) {
                    row += 1;
                    isGoingUp = true;
                    continue;
                }    
                
                ++row;
                --col;
            }
        }
        return result;
    }
}