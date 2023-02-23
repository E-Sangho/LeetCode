class MovingAverage {
    Queue<Integer> queue; 
    int maxSize;
    double total;
    
    public MovingAverage(int size) {
        queue = new LinkedList<>();
        maxSize = size;        
        total = 0;
    }
    
    public double next(int val) {
        if (queue.size() < maxSize) {
            queue.offer(val);
            total += val;
        } else {
            total -= queue.poll();
            queue.offer(val);
            total += val;
        }    
        
        return total / queue.size();
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * MovingAverage obj = new MovingAverage(size);
 * double param_1 = obj.next(val);
 */