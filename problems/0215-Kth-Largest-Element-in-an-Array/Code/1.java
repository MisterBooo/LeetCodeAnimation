class Solution {
    public int findKthLargest(int[] nums, int k) {
        // // 创建一个小顶堆（优先队列模拟）
        PriorityQueue<Integer> heap =
            new PriorityQueue<Integer>();

        // 在堆中维护当前最大k个元素
        for (int i = 0; i < nums.length; i++){
            if(heap.size() < k){
                heap.add(nums[i]);
            }else if (heap.element() < nums[i]){
                heap.poll();
                heap.add(nums[i]);
            }
        }
        return heap.poll();        
  }
}