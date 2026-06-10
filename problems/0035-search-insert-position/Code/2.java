//时间复杂度：O(lon(n))
//空间复杂度：O(1)
class Solution2 {
    public int searchInsert(int[] nums, int target) {
        if (target>nums[nums.length-1]) {
            return nums.length;
        }
        int left=0;
        int right=nums.length-1;
        while (left < right) {
            int mid = (left + right) / 2;
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;

    }
}