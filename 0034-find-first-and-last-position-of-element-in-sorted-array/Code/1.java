class Solution {
    public int[] searchRange(int[] nums, int target) {
		int[] res = new int[] { -1, -1 };
		int left = 0;
		int right = nums.length - 1;
		int l = left;
		int r = right;
		while (left < right) {
			int mid = (left + right) / 2;
			if (nums[mid] < target) {
				left = mid + 1;
			} else {
				right = mid;
			}
		}
		if (left>right||nums[left]!=target) {
			return new int[]{-1,-1};
		}
		while (l < r) {
			int mid = (l + r) / 2 + 1;
			if (nums[mid] > target) {
				r = mid - 1;
			} else {
				l = mid;
			}
		}
		if (left > right || left > r) {
			return new int[] { -1, -1 };
		} else {
			return new int[] { left, r };
		}
	}
}