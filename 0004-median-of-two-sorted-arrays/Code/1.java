public class Solution {
  public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
      int[] temp = nums1;
      nums1 = nums2;
      nums2 = temp;
    }

    int len1 = nums1.length;
    int len2 = nums2.length;
    int leftLen = (len1 + len2 + 1) / 2; // Half of the total length (rounded up)
    
    int start = 0;
    int end = len1;
    while (start <= end) {
      // Partition indices in nums1 and nums2
      int count1 = start + (end - start) / 2;
      int count2 = leftLen - count1;
      
      if (count1 > 0 && nums1[count1 - 1] > nums2[count2]) {
        // Move partition in nums1 to the left
        end = count1 - 1;
      } else if (count1 < len1 && nums2[count2 - 1] > nums1[count1]) {
        // Move partition in nums1 to the right
        start = count1 + 1;
      } else {
        // We have found the correct partition
        int result = (count1 == 0) ? nums2[count2 - 1] : // If count1 is 0, take from nums2
                     (count2 == 0) ? nums1[count1 - 1] : // If count2 is 0, take from nums1
                     Math.max(nums1[count1 - 1], nums2[count2 - 1]); // Maximum of left side
        if ((len1 + len2) % 2 == 1) {
          return result; // If odd, return the max of the left side
        }

        // If even, find the next smallest element from the right side
        int nextValue = (count1 == len1) ? nums2[count2] : 
                        (count2 == len2) ? nums1[count1] : 
                        Math.min(nums1[count1], nums2[count2]);

        return (result + nextValue) / 2.0; // Return the average of left and right sides
      }
    }

    return Integer.MIN_VALUE; // This should never happen if input arrays are valid
  }
}
