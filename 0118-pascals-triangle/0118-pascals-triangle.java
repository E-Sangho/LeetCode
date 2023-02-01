class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> curRow = new ArrayList<>();
        curRow.add(1);
        for (int i = 1; i <= numRows; ++i) {
            result.add(new ArrayList<Integer>(curRow));
            curRow = nextRow(curRow); 
        }
        
        return result;
    }
    
    public List<Integer> nextRow(List<Integer> curRow) {
        List<Integer> next = new ArrayList<>();
        
        next.add(1);
        for (int i = 0; i < curRow.size() - 1; ++i) {
            next.add(curRow.get(i) + curRow.get(i + 1));
        }
        next.add(1);
        
        return next;
    }
}