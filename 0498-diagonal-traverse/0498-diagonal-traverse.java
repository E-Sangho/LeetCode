import java.util.List;
import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public int[] findDiagonalOrder(int[][] mat) {
        int m = mat.length,
            n = mat[0].length;
        List<Integer>[] dict = new ArrayList[m + n - 1];
        int[] result = new int[m * n];
        int index = 0;
        
        for (int i = 0; i < m + n - 1; ++i) {
            dict[i] = new ArrayList<Integer>();
        }
        
        for (int row = 0; row < m; ++row) {
            for (int col = 0; col < n; ++col) {
                dict[row + col].add(mat[row][col]);
            }
        }
     
        for (int i = 0; i < m + n - 1; ++i) {
            if (i % 2 == 0) {
                for (int j = dict[i].size() - 1; j >= 0; --j) {
                    result[index++] = dict[i].get(j);
                }
            } else {
                for (int j = 0; j < dict[i].size(); ++j) {
                    result[index++] = dict[i].get(j);
                }
            }
        }
        
        return result;
    }
}