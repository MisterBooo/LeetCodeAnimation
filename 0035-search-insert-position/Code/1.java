class Solution1 {
    public int searchInsert(int[] nums, int target) {
        int i=0;
        for(;i<nums.length;i++){
            if (nums[i]>=target){
                break;
            }
        }
        return i;
    }
}