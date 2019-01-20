/// Source : https://leetcode.com/problems/perfect-squares/description/
/// Author : liuyubobobo
/// Time   : 2017-11-17

import java.util.Arrays;

/// Dynamic Programming
/// Time Complexity: O(n)
/// Space Complexity: O(n)
public class Solution3 {

    public int numSquares(int n) {

        int[] mem = new int[n+1];
        Arrays.fill(mem, Integer.MAX_VALUE);
        mem[0] = 0;
        for(int i = 1; i <= n ; i ++)
            for(int j = 1 ; i - j * j >= 0 ; j ++)
                mem[i] = Math.min(mem[i], 1 + mem[i - j * j]);

        return mem[n];
    }

    public static void main(String[] args) {

        System.out.println((new Solution3()).numSquares(12));
        System.out.println((new Solution3()).numSquares(13));
    }
}
