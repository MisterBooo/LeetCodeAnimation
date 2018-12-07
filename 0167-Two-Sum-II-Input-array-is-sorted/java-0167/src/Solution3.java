/// Source : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
/// Author : liuyubobobo
/// Time   : 2017-11-13

// Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
public class Solution3 {

    public int[] twoSum(int[] numbers, int target) {

        if(numbers.length < 2 /*|| !isSorted(numbers)*/)
            throw new IllegalArgumentException("Illegal argument numbers");

        int l = 0, r = numbers.length - 1;
        while(l < r){

            if(numbers[l] + numbers[r] == target){
                int[] res = {l+1, r+1};
                return res;
            }
            else if(numbers[l] + numbers[r] < target)
                l ++;
            else // numbers[l] + numbers[r] > target
                r --;
        }

        throw new IllegalStateException("The input has no solution");
    }

    private boolean isSorted(int[] numbers){
        for(int i = 1 ; i < numbers.length ; i ++)
            if(numbers[i] < numbers[i-1])
                return false;
        return true;
    }

    private static void printArr(int[] nums){
        for(int num: nums)
            System.out.print(num + " ");
        System.out.println();
    }

    public static void main(String[] args) {

        int[] nums = {2, 7, 11, 15};
        int target = 9;
        printArr((new Solution3()).twoSum(nums, target));
    }
}
