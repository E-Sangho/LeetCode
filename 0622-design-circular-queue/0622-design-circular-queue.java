class Node {
    int val;
    Node next;
    
    public Node(int val, Node next) {
        this.val = val;
        this.next = next;
    }
}

class MyCircularQueue {
    int size;
    int maxSize;
    Node head;
    Node tail;
   
    // MyCircularQueue(k) Initializes the object with the size of the queue to be k.
    public MyCircularQueue(int k) {
        size = 0;
        maxSize = k;
        head = null;
        tail = null;
    }
    
    // boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
    public boolean enQueue(int value) {
        if (isFull()) {
            return false;
        }  
        
        Node newNode = new Node(value, null);
        if (isEmpty()) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next= newNode;
            tail = newNode;
        }
        
        ++size;
        return true;
    }
    
    // boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
    public boolean deQueue() {
        if (isEmpty()) return false;
        
        head = head.next;
        --size;
        return true;
    }
    
    // int Front() Gets the front item from the queue. If the queue is empty, return -1.
    public int Front() {
        return isEmpty() ? -1 : head.val;
    }
    
    // int Rear() Gets the last item from the queue. If the queue is empty, return -1.
    public int Rear() {
        return isEmpty() ? -1 : tail.val;
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