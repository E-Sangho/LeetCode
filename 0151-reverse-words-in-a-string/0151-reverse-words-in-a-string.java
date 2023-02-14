class Solution {
    public String reverseWords(String s) {
        s = s.trim();
        String[] splitted = s.split("\\s+");
        List<String> list = Arrays.asList(splitted);
        Collections.reverse(list);
        return String.join(" ", list);
    }
}