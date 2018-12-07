/// Source : https://leetcode.com/problems/two-sum/description/
/// Author : liuyubobobo
/// Time   : 2017-11-15

import java.util.HashMap;

/// Brute Force
/// Time Complexity: O(n^2)
/// Space Complexity: O(1)
public class Solution1 {

    public int[] twoSum(int[] nums, int target) {

        for(int i = 0 ; i < nums.length; i ++)
            for(int j = 0 ; j < nums.length ; j ++)
                if(nums[i] + nums[j] == target){
                    int[] res = {i, j};
                    return res;
                }

        throw new IllegalStateException("the input has no solution");
    }

    private static void printArr(int[] nums){
        for(int num: nums)
            System.out.print(num + " ");
        System.out.println();
    }

    public static void main(String[] args) {

        int[] nums = {0, 4, 3, 0};
        int target = 0;
        printArr((new Solution1()).twoSum(nums, target));
    }
}
