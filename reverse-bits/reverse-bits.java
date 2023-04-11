public class Solution {
    // you need treat n as an unsigned value
    public int reverseBits(int n) {
        StringBuilder sb = new StringBuilder();
        while (n != 0) {
            sb.append((n & 1) > 0 ? 1 : 0);
            n = n >>> 1;
        }
        
        while (sb.length() < 32) {
            sb.append("0");
        }
        
        String str = sb.toString();
        System.out.println(str);

        int x = 0;
        for (int i = 1; i < str.length(); ++i) {
            if (str.charAt(i) == '1') {
                x += Math.pow(2, str.length() - i - 1);
            }
        }
        
        if (str.charAt(0) == '1') {
            x -= Math.pow(2, 31);
        }    
        
        return x;
    }
}