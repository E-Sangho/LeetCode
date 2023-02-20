class Solution {
    public int[] sortArray(int[] nums) {
        List<Integer> heap = new ArrayList<>();
        int[] ans = new int[nums.length];
        heap.add(Integer.MAX_VALUE);
        
        for (int num : nums) {
            push(heap, -num);
        }
        
        for (int i = 0; i < nums.length; ++i) {
            ans[i] = -pop(heap);
        }

        return ans;
    }
    
    public void push(List<Integer> heap, int x) {
        x = (Integer)x;
        heap.add(x);
        int child = heap.size() - 1;
        int parent =  child / 2;
        
        while (child > 1 && heap.get(child) > heap.get(parent)) {
            swap(heap, child, parent);
            child = parent;
            parent = child / 2;
        }
    }
    
    public int pop(List<Integer> heap) {
        swap(heap, 1, heap.size() - 1);
        int returnVal = heap.remove(heap.size() - 1);   
        int lastIndex = heap.size() - 1;
        
        int parent = 1;
        int leafBoundary = lastIndex / 2;
        
        while (parent <= leafBoundary) {
            int left  = parent * 2,
                right = parent * 2 + 1;
            
            if (heap.get(parent) < heap.get(left) || (right <= lastIndex && heap.get(parent) < heap.get(right))) {
                if (right > lastIndex || heap.get(right) < heap.get(left)) {
                    swap(heap, parent, left); 
                    parent = left;
                } else {
                    swap(heap, parent, right);
                    parent = right;
                }
            } else {
                break;
            }
        }
        
        return returnVal;
    }
    
 
    public void swap(List<Integer> heap, int i, int j) {
        int temp = heap.get(i);
        heap.set(i, heap.get(j));
        heap.set(j, temp);
    }
}