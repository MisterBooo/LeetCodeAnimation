/// Source : https://leetcode.com/problems/move-zeroes/description/
/// Author : liuyubobobo
/// Time   : 2017-02-09

import java.util.*;

// Time Complexity: O(n)
// Space Complexity: O(n)
class Solution2 {

    public void moveZeroes(int[] nums) {

        int k = 0; // keep nums[0...k) are all zero elements
        for(int i = 0 ; i < nums.length ; i ++)
            if(nums[i] != 0)
                nums[k++] = nums[i];

        // make the nums[k...end) zeros
        for(int i = k ; i < nums.length ; i ++)
            nums[i] = 0;
    }

    private static void printArr(int[] arr){
        for(int i = 0 ; i < arr.length ; i ++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String args[]){

        int[] arr = {0, 1, 0, 3, 12};
        (new Solution2()).moveZeroes(arr);
        printArr(arr);
    }
}