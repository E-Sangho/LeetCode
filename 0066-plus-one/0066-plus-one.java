class Solution {
    public int[] plusOne(int[] digits) {
        int index = digits.length - 1;
        digits[index] += 1;
        
        while (index >= 0) {
            if (digits[index] == 10) {
                digits[index] = 0;
                if (index == 0) {
                    int[] newDigits = new int[digits.length + 1];
                    newDigits[0] = 1;
                    for (int i = 0; i < digits.length; ++i) {
                        newDigits[i + 1] = digits[i];
                    }
                    digits = newDigits;
                } else {
                    digits[index - 1] += 1;
                }
                --index;
            } else {
                break;
            }     
        }
        
        return digits;
    }
}