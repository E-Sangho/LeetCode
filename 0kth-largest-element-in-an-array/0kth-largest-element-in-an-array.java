class Solution {
    public int findKthLargest(int[] nums, int k) {
        List<Integer> heap = new ArrayList<>();   
        heap.add(Integer.MAX_VALUE);
        
        for (int num : nums) {
            push(heap, num);
        } 
        
        for (int i = 0; i < (k - 1); ++i) {
            pop(heap);
        }
        
        return pop(heap);
    }
    
    public void push(List<Integer> heap, int x) {
        heap.add(x);        
        int child = heap.size() - 1;
        int parent = child / 2;
        
        while (child > 1 && heap.get(child) > heap.get(parent)) {
            swap(heap, child, parent);
            child = parent;
            parent = child / 2;
        }
    }
    
    public int pop(List<Integer> heap) {
        swap(heap, 1, heap.size() - 1);
        int returnVal = heap.remove(heap.size() - 1);
        
        int parent = 1;
        int lastIndex = heap.size() - 1;
        int leafBoundary = lastIndex / 2;
        
        while (parent <= leafBoundary) {
            int left  = parent * 2,
                right = parent * 2 + 1;
            if (heap.get(parent) < heap.get(left) || (right <= lastIndex && heap.get(parent) < heap.get(right))) {
                if (right > lastIndex || heap.get(right) < heap.get(left)) {
                    swap(heap, left, parent);
                    parent = left;
                } else {
                    swap(heap, right, parent);
                    parent = right;
                }
            } else {
                break;
            }
        }
        
        return returnVal;
    }
    
    public void swap(List<Integer> heap, int x, int y) {
        int temp = heap.get(x);
        heap.set(x, heap.get(y));
        heap.set(y, temp);
    }
}