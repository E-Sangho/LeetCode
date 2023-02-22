class MyCircularQueue {
    int[] queue;
    int front;
    int rear;
    int size;
    int maxSize;
    
    // MyCircularQueue(k) Initializes the object with the size of the queue to be k.
    public MyCircularQueue(int k) {
        queue = new int[k];           
        size = 0;
        maxSize = k;
        front = 0;
        rear = -1;
    }
    
    // boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
    public boolean enQueue(int value) {
        if (this.isFull()) return false;
        
        rear = (rear + 1) % maxSize;
        queue[rear] = value;
        ++size;
        return true;
    }
    
    // boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
    public boolean deQueue() {
        if (this.isEmpty()) return false;
        
        front = (front + 1) % maxSize;
        --size;
        
        return true;
    }
    
    // int Front() Gets the front item from the queue. If the queue is empty, return -1.
    public int Front() {
        return this.isEmpty() ? -1 : queue[front];
    }
    
    // int Rear() Gets the last item from the queue. If the queue is empty, return -1.
    public int Rear() {
        return this.isEmpty() ? -1 : queue[rear];
    }
    
    // boolean isEmpty() Checks whether the circular queue is empty or not.
    public boolean isEmpty() {
        return size == 0;
    }
    
    // boolean isFull() Checks whether the circular queue is full or not.
    public boolean isFull() {
        return size == maxSize;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */