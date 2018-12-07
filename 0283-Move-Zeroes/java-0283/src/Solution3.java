/// Source : https://leetcode.com/problems/move-zeroes/description/
/// Author : liuyubobobo
/// Time   : 2017-02-09

import java.util.*;

// Time Complexity: O(n)
// Space Complexity: O(n)
class Solution3 {

    public void moveZeroes(int[] nums) {

        int k = 0; // keep nums[0...k) are all zero elements
        for(int i = 0 ; i < nums.length ; i ++)
            if(nums[i] != 0)
                swap(nums, k++, i);
    }

    private void swap(int[] nums, int i, int j){
        int t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }

    private static void printArr(int[] arr){
        for(int i = 0 ; i < arr.length ; i ++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String args[]){

        int[] arr = {0, 1, 0, 3, 12};
        (new Solution3()).moveZeroes(arr);
        printArr(arr);
    }
}