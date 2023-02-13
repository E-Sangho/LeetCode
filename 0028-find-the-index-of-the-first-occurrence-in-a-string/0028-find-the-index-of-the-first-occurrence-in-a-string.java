class Solution {
    public int strStr(String haystack, String needle) {
        char[] haystackArray = haystack.toCharArray(),
               needleArray = needle.toCharArray();
        
        for (int index = 0; index < haystackArray.length; ++index) {
            int curIndex = index;
            for (int needleIndex = 0; needleIndex < needleArray.length; ++needleIndex) {
                if (curIndex < haystackArray.length && haystackArray[curIndex] == needleArray[needleIndex]) {
                    ++curIndex;
                    if (needleIndex == needleArray.length - 1) {
                        return index;
                    }
                } else {
                    break;
                }
            }
        }
        
        return -1;
    }
}