class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> curRow = new ArrayList<>();
        curRow.add(1);
        for (int i = 0; i < rowIndex; ++i) {
           curRow = nextTriangle(curRow); 
        }
        
        return curRow;
    }
    
    public List<Integer> nextTriangle(List<Integer> curRow) {
        List<Integer> nextRow = new ArrayList<>();
        nextRow.add(1);
        for (int i = 0; i < curRow.size() - 1; ++i) {
            nextRow.add(curRow.get(i) + curRow.get(i + 1));
        } 
        nextRow.add(1);
        
        return nextRow;
    }
}