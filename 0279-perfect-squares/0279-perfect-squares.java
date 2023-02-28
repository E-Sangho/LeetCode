class Solution {
    List<Integer> primes = new LinkedList<>();
    
    public int numSquares(int n) {
        for (int i = 1; i * i <= n; ++i) {
            primes.add(i * i);
        }
        
        return BFS(n);
    }
    
    public int BFS(int n) {
        Queue<Integer> queue = new LinkedList<>();
        queue.add(n);
        
        int queueSize,
            front,
            depth = 0;
        
        while (queue.size() > 0) {
            queueSize = queue.size();
            depth += 1;
            
            for (int i = 0; i < queueSize; ++i) {
                front = queue.poll();            
                
                for (int s = 0; s < primes.size(); ++s) {
                    int diff = front - primes.get(s);
                    
                    if (diff == 0) {
                        return depth;
                    }
                    
                    if (diff > 0) {
                        queue.add(diff);
                    }
                }
            }
        }
        
        return -1;
    }
}