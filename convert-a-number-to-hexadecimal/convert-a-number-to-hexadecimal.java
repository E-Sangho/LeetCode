class Solution {
    public String toHex(int num) {
        String[] hex = {"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"};
        
        StringBuilder sb = new StringBuilder();
        
        if (num == 0) {
            return "0";
        }
        
        while (num != 0) {
            sb.append(hex[(num & 15)]);
            num = num >>> 4;
        }
        
        return sb.reverse().toString();
    }
}