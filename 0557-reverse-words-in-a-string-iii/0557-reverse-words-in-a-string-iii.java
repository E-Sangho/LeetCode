class Solution {
    public String reverseWords(String s) {
        String[] splitted = s.split(" ");
        for (int i = 0; i < splitted.length; ++i) {
            List<String> list = Arrays.asList(splitted[i].split(""));
            Collections.reverse(list);
            String[] a = list.toArray(new String[0]);
            String output = String.join("", a);
            splitted[i] = output;
        }
        
        return String.join(" ", splitted);
    }
}