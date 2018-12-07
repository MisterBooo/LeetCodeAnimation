/// Source : https://leetcode.com/problems/move-zeroes/description/
/// Author : liuyubobobo
/// Time   : 2017-02-09

import java.util.*;

// Time Complexity: O(n)
// Space Complexity: O(n)
class Solution1 {

    public void moveZeroes(int[] nums) {

        ArrayList<Integer> nonZeroElements = new ArrayList<Integer>();

        // put all the non zero elements into a new vector
        for (int i = 0; i < nums.length; i++)
            if (nums[i] != 0)
                nonZeroElements.add(nums[i]);

        // make nums[0...nonZeroElements.size()) all non zero elements
        for (int i = 0; i < nonZeroElements.size(); i++)
            nums[i] = nonZeroElements.get(i);

        // make nums[nonZeroElements.size()...nums.size()) all zero elements
        for (int i = nonZeroElements.size(); i < nums.length; i++)
            nums[i] = 0;
    }

    private static void printArr(int[] arr){
        for(int i = 0 ; i < arr.length ; i ++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }

    public static void main(String args[]){

        int[] arr = {0, 1, 0, 3, 12};
        (new Solution1()).moveZeroes(arr);
        printArr(arr);
    }
}