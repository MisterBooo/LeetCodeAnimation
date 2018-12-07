/// Source : https://leetcode.com/problems/two-sum/description/
/// Author : liuyubobobo
/// Time   : 2017-11-15

import java.util.HashMap;

/// Two-Pass Hash Table
/// Time Complexity: O(n)
/// Space Complexity: O(n)
public class Solution2 {

    public int[] twoSum(int[] nums, int target) {

        HashMap<Integer, Integer> record = new HashMap<Integer, Integer>();
        for(int i = 0 ; i < nums.length ; i ++)
            record.put(nums[i], i);

        for(int i = 0 ; i < nums.length; i ++){

            Integer index = record.get(target - nums[i]);
            if(index != null && index != i){
                int[] res = {i, index};
                return res;
            }

            record.put(nums[i], i);
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
        printArr((new Solution2()).twoSum(nums, target));
    }
}
