import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public int[] findDiagonalOrder(int[][] mat) {
        if (mat == null || mat.length == 0) {
            return new int[0];
        }
        int m = mat.length,
            n = mat[0].length,
            index = 0;
        
        int[] result = new int[m * n];
        List<Integer> memo = new ArrayList<>();
        
        for (int d = 0; d <  m + n - 1; ++d) {
            int row, col;
            
            if (d < n) {
                row = 0;
                col = d;
            } else {
                row = d - (n - 1);
                col = n - 1;
            }
            
            while (0 <= col && row < m) {
                memo.add(mat[row][col]);
                ++row;
                --col;
            }
            
            if (d % 2 == 0) {
                Collections.reverse(memo);
            }
            
            for (int i = 0; i < memo.size(); ++i) {
                result[index++] = memo.get(i);
            }
            
            memo.clear();
        }
        
        return result;
    }
}