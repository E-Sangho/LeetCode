class Solution {
    public int openLock(String[] deadends, String target) {
        return BFS(deadends, target);    
    }
    
    // BFS
    public int BFS(String[] deadends, String target) {
        if (contains(deadends, "0000")) {
            return -1;
        }
        boolean[] dp = new boolean[10000];
        Queue<String> queue = new LinkedList<>();
        queue.add("0000");
        dp[0] = true;
        
        for (int i = 0; i < deadends.length; ++i) {
            dp[Integer.parseInt(deadends[i])] = true;
        }
        
        int turns = -1;
        
        while (queue.size() > 0) {
            int queueSize = queue.size();
            ++turns;
            for (int i = 0; i < queueSize; ++i) {
                String front = queue.poll();
                
                if (front.equals(target)) {
                    return turns;
                }
               
                String[] nexts = nexts(front);
               
                for (int d = 0; d < 8; ++d) {
                    if (!dp[Integer.parseInt(nexts[d])]) {
                        dp[Integer.parseInt(nexts[d])] = true;
                        queue.add(nexts[d]);
                    }
                }
            }
        }
        
        return -1;
    }
    
    public String[] nexts(String value) {
        char[] letters = value.toCharArray();
        String[] nexts = new String[8];
        
        
        for (int i = 0; i < 4; ++i) {
            char[] copy = letters.clone();
            if (copy[i] + 1 == 58) {
                copy[i] = '0';
            } else {
                copy[i] = (char)(copy[i] + 1);
            }
            nexts[i] = new String(copy);
        }
        
        for (int i = 0; i < 4; ++i) {
            char[] copy = letters.clone();
            if (copy[i] - 1 == 47) {
                copy[i] = '9';
            } else {
                copy[i] = (char)(copy[i] - 1);
            }
            nexts[i + 4] = new String(copy);
        }
        
        return nexts;
    }
    
    public boolean contains(String[] deadends, String x) {
        for (int i = 0; i < deadends.length; ++i) {
            if (deadends[i].equals(x)) {
                return true;
            }
        }
        
        return false;
    }
}