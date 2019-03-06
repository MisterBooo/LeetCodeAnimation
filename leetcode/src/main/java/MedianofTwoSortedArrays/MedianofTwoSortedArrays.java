package MedianofTwoSortedArrays;

import java.util.ArrayList;
import java.util.List;

public class MedianofTwoSortedArrays {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        List<Integer> tmp = new ArrayList<Integer>();
        for (int i : nums1) {
            tmp.add(i);
        }
        for (int i : nums2) {
            tmp.add(i);
        }
        for (int i = 0; i < tmp.size(); i++) {
            for (int j = i; j < tmp.size(); j++) {
                if (tmp.get(j) < tmp.get(i)) {
                    int tmpInt = tmp.get(i);
                    tmp.set(i, tmp.get(j));
                    tmp.set(j, tmpInt);
                }

            }
        }
        if (tmp.size() % 2 == 0) {
            return (tmp.get(tmp.size() / 2 - 1) + tmp.get(tmp.size() / 2)) / 2;
        } else {
            return tmp.get(tmp.size() / 2);
        }
    }

    public static double findMedianSortedArraysOptimal(int[] A, int[] B) {
        int m = A.length;
        int n = B.length;
        if (m > n) {
            // to ensure m<=n
            int[] temp = A; A = B; B = temp;
            int tmp = m; m = n; n = tmp;
        }
        int iMin = 0, iMax = m, halfLen = (m + n + 1) / 2;
        while (iMin <= iMax) {
            int i = (iMin + iMax) / 2;
            int j = halfLen - i;
            if (i < iMax && B[j-1] > A[i]){
                iMin = i + 1;
                // i is too small
            }
            else if (i > iMin && A[i-1] > B[j]) {
                iMax = i - 1;
                // i is too big
            }
            else { // i is perfect
                int maxLeft = 0;
                if (i == 0) { maxLeft = B[j-1]; }
                else if (j == 0) { maxLeft = A[i-1]; }
                else { maxLeft = Math.max(A[i-1], B[j-1]); }
                if ( (m + n) % 2 == 1 ) { return maxLeft; }

                int minRight = 0;
                if (i == m) { minRight = B[j]; }
                else if (j == n) { minRight = A[i]; }
                else { minRight = Math.min(B[j], A[i]); }

                return (maxLeft + minRight) / 2.0;
            }
        }
        return 0.0;
    }
    public static void main(String[] args) {
        int[] nums1 = {1, 3};
        int[] nums2 = {2};
        double result = (double) findMedianSortedArrays(nums1, nums2);
        double resultOptimal = (double) findMedianSortedArraysOptimal(nums1, nums2);
        System.out.println(result+"\t\n"+resultOptimal);
    }
}
